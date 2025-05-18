import { type Replacement } from "../../lang/types";
import { parse } from "acorn";
import { simple } from "acorn-walk";
import fs from 'fs';

interface Edit {
  start: number;
  end: number;
  newRaw: string;
}

// acorn Node 타입을 확장해서 range 속성을 가진 인터페이스 정의
interface NodeWithRange {
  range?: [number, number];
  value?: any;
}

export function patchFile(filePath: string, replacements: Replacement[]) {
  const source = fs.readFileSync(filePath, 'utf-8');

  // 2. AST 파싱
  const ast = parse(source, {
    ecmaVersion: "latest",
    sourceType: "module",
    ranges: true
  });

  // 3. 문자열 리터럴 및 템플릿 리터럴 교체 로직
  const edits: Edit[] = [];
  simple(ast, {
    Literal(node) {
      // 일반 따옴표 문자열
      const nodeWithRange = node as NodeWithRange;
      if (typeof nodeWithRange.value === "string" && nodeWithRange.range) {
        processRange(nodeWithRange.range[0], nodeWithRange.range[1], source, edits);
      }
    },
    TemplateLiteral(node) {
      // 백틱(`) 템플릿 문자열 전체
      const nodeWithRange = node as NodeWithRange;
      if (nodeWithRange.range) {
        processRange(nodeWithRange.range[0], nodeWithRange.range[1], source, edits);
      }
    }
  });

  // 범위(start~end) 내 텍스트 교체 처리 함수
  function processRange(start: number, end: number, sourceText: string, editsArray: Edit[]) {
    const raw = sourceText.slice(start, end);
    const delim = raw[0];  // ' or " or `
    const content = raw.slice(1, -1);
    let newContent = content;
    for (const { originalText, changeText, searchType } of replacements) {
      if (searchType === "exact") {
        if (newContent === originalText) {
          newContent = changeText;
          break;
        }
      } else {
        // partial
        if (newContent.includes(originalText)) {
          newContent = newContent.split(originalText).join(changeText);
        }
      }
    }
    if (newContent !== content) {
      const newRaw = `${delim}${newContent}${delim}`;
      editsArray.push({ start, end, newRaw });
    }
  }

  // 4. 편집 적용 (뒤에서부터)
  edits.sort((a, b) => b.start - a.start);
  let output = source;
  for (const { start, end, newRaw } of edits) {
    output = output.slice(0, start) + newRaw + output.slice(end);
  }

  // 5. 결과 저장
  fs.writeFileSync(filePath, output, "utf8");
  console.log(`[INFO] Completed: ${edits.length} strings replaced in '${filePath}'`);

}