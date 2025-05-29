# Cursor 언어 패치

Cursor IDE를 한국어로 사용할 수 있게 해주는 패치 도구입니다.

## ⚡ 빠른 시작

### 필요 조건
- Windows 10/11
- [Cursor IDE](https://www.cursor.com)
- [Bun](https://bun.sh)

### 간편 설치 (추천)
```powershell
# 한국어 패치 적용
bunx github:somersby10ml/cursor-language-patch --patch

# 원본으로 복구
bunx github:somersby10ml/cursor-language-patch --restore
```

### 수동 설치
```bash
git clone https://github.com/somersby10ml/cursor-language-patch.git
cd cursor-language-patch
bun install
bun run patch
```

## 🌟 주요 기능

- **안전한 패치**: 모든 원본 파일을 백업 후 최소한의 수정
- **완전한 복원**: 언제든지 원본 상태로 되돌리기 가능
- **자동 백업**: 수정되는 모든 파일의 원본 보존
- **버전 관리**: Cursor 업데이트 감지 및 호환성 처리

## 🔧 사용법

```bash
bun run patch    # 한국어 패치 적용
bun run restore  # 원본으로 복구
bun run help     # 도움말 보기
```

## 📂 작동 원리

이 도구는 안전하고 복원 가능한 방식으로 작동합니다:

1. **백업 생성**: 수정할 파일들의 원본을 안전하게 백업
2. **인터셉터 설치**: 파일 요청을 가로채서 번역된 버전으로 리디렉션
3. **번역 파일 제공**: Electron의 프로토콜 인터셉션 기능을 활용

```
Cursor 설치 폴더/
├── resources/app/
│   ├── package.json (인터셉터 등록)
│   ├── package.json.backup (원본 백업)
│   └── out/
│       ├── cursorTranslatorMain.js (인터셉터)
│       └── vs/workbench/
│           ├── workbench.desktop.main.js (원본)
│           └── workbench.desktop.main_translated.js (번역본)
```

## 🌐 다국어 지원

**현재 지원**: 🇰🇷 한국어

**확장 가능한 언어 (예시)**:
- 🇯🇵 일본어
- 🇨🇳 중국어 간체
- 🇪🇸 스페인어
- 🇫🇷 프랑스어

## 🤝 기여하기

### 번역 개선
`lang/ko.ts` 파일을 수정하여 번역을 개선할 수 있습니다.

### 새 언어 추가
1. `lang/{언어코드}.ts` 파일 생성
2. `src/utils/languageManager.ts`에서 해당 언어 활성화
3. 테스트 후 PR 제출

## 🔧 문제 해결

### 패치가 적용되지 않을 때
1. Cursor를 완전히 종료
2. 복구 명령 실행: `bun run restore`
3. 패치 재적용: `bun run patch`
4. Cursor 재시작

### 기타 문제
- [FAQ 문서](https://github.com/somersby10ml/cursor-language-patch/wiki/FAQ) 참조
- 문제 지속 시 GitHub 이슈 등록

## ⚠️ 주의사항

- Cursor 업데이트 후 패치를 다시 적용해야 할 수 있습니다
- 중요한 작업 전에는 데이터를 백업하는 것을 권장합니다
- 관리자 권한은 필요하지 않습니다

## 📄 라이선스

MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

**면책조항**: 이 도구는 Cursor/Anysphere와 공식적으로 연관되지 않은 프로젝트입니다.