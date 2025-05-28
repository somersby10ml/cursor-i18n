# Cursor 언어 패치

Cursor IDE를 위한 안전하고 간단한 한국어 패치 도구입니다. 원본 파일을 수정하지 않는 안전한 방식을 사용합니다.

## 🌟 주요 기능

- **안전한 패치**: 원본 Cursor 파일을 수정하지 않음
- **간편한 설치**: 메뉴 기반의 직관적인 인터페이스
- **완전한 복원**: 언제든지 원본 상태로 복원 가능
- **버전 관리**: 구버전 번역 파일 자동 정리
- **Electron 통합**: Electron 프로토콜 인터셉션 활용

## 🚀 빠른 시작

### 필요 조건
- Windows (현재 Windows만 지원)
- Cursor IDE 설치됨
- Node.js 또는 Bun 런타임

### 설치 및 사용법

1. **저장소 복제**
   ```bash
   git clone https://github.com/somersby10ml/cursor-language-patch.git
   cd cursor-language-patch
   ```

2. **의존성 설치**
   ```bash 
   bun install
   ```

3. **패치 도구 실행**
   ```bash 
   bun start
   ```

4. **메뉴에서 선택**
   ```
   🌐 Cursor Language Patcher
   =========================
   
   Please select an option:
   
   1. Apply Korean Language Patch
   2. Restore Original & Remove All Patches
   3. Exit
   ```

## 📋 작동 방식

### 안전한 패치 방법
이 도구는 직접 Cursor 파일을 수정하는 대신:
1. `workbench.desktop.main.js`의 번역된 복사본을 생성
2. 파일 요청을 리디렉션하는 인터셉터를 배포
3. Electron의 프로토콜 인터셉션을 사용하여 번역된 파일 제공
4. 모든 원본 파일을 그대로 유지

### 파일 구조
```
Cursor 설치 폴더/
├── resources/app/
│   ├── package.json (인터셉터 사용을 위해 수정됨)
│   ├── package.json.backup (원본 백업)
│   └── out/
│       ├── main.js (원본)
│       ├── main_original.js (백업)
│       ├── cursorTranslatorMain.js (인터셉터)
│       └── vs/workbench/
│           ├── workbench.desktop.main.js (원본)
│           └── workbench.desktop.main_translated.js (번역됨)
```

## 🛡️ 보안 기능

- **원본 파일 미수정**: 원본 파일은 그대로 보존
- **완전한 복원**: 100% 되돌릴 수 있는 프로세스
- **안전한 파일 처리**: 기본적인 파일 검증 수행

## 🌐 다국어 지원 계획

현재 한국어를 지원하며, 향후 다음 언어들을 추가할 예정입니다:

- 🇯🇵 **일본어** (Japanese) - 개발 예정
- 🇨🇳 **중국어 간체** (Chinese Simplified) - 개발 예정  
- 🇪🇸 **스페인어** (Spanish) - 개발 예정
- 🇫🇷 **프랑스어** (French) - 개발 예정

### 새 언어 추가 방법
1. `lang/` 폴더에 언어 파일 생성 (예: `ja.ts`, `zh-cn.ts`)
2. `src/utils/languageManager.ts`에서 해당 언어의 `enabled: true`로 변경
3. 번역 규칙을 언어 파일에 추가

## 🔧 고급 사용법

### 실행 방법
- Node.js 사용자: `npm start`
- Bun 사용자: `bun start`
- 메뉴에서 원하는 옵션 선택

### 번역 파일
- 한국어 번역은 `lang/ko.ts`에 위치
- 번역 파일은 Cursor 버전별로 자동 생성
- 구버전 번역 파일은 자동으로 정리됨

## 🧹 제거 방법

패치를 완전히 제거하려면:
1. 도구 실행: `npm start` 또는 `bun start`
2. 메뉴에서 `2. Restore Original & Remove All Patches` 선택
3. Cursor 재시작

이 과정에서:
- 원본 `package.json` 복원
- 모든 번역 파일 제거
- 인터셉터 제거
- Cursor를 원본 영어 인터페이스로 복원

## 🤝 기여하기

기여는 언제나 환영합니다!

1. 저장소 포크
2. 기능 브랜치 생성
3. 변경사항 구현
4. 철저한 테스트
5. 풀 리퀘스트 제출

### 번역 개선하기
한국어 번역을 개선하려면:
1. `lang/ko.ts` 파일 편집
2. 번역 규칙 추가 또는 수정
3. Cursor 설치에서 테스트
4. 풀 리퀘스트 제출

### 새 언어 추가하기
새로운 언어를 추가하려면:
1. `lang/{언어코드}.ts` 파일 생성
2. `types.ts`를 참고하여 번역 규칙 작성
3. `languageManager.ts`에서 해당 언어 활성화
4. 테스트 및 풀 리퀘스트 제출

## 📋 시스템 요구사항

- **운영체제**: Windows 10/11 (x64)
- **Cursor**: 최신 버전 (0.50.4+ 테스트됨)
- **런타임**: Node.js 16+ 또는 Bun
- **관리자 권한**: 불필요

## ⚠️ 중요 참고사항

1. **버전 호환성**: 도구가 자동으로 Cursor 버전을 감지합니다
2. **업데이트**: Cursor 업데이트 후 패치를 다시 적용해야 할 수 있습니다
3. **백업**: 원본 파일은 항상 자동으로 백업됩니다
4. **복원**: 언제든지 원본 상태로 복원 가능합니다

## 🐛 문제 해결

### 자주 발생하는 문제

**Q: 패치 후에도 Cursor가 한국어로 표시되지 않습니다**
- Cursor를 완전히 재시작했는지 확인
- 패치가 성공적으로 적용되었는지 확인 (성공 메시지 확인)

**Q: 패치 후 Cursor가 시작되지 않습니다**
- 도구를 다시 실행하고 "Restore Original" 선택
- 여전히 문제가 있다면 백업 파일에서 수동 복원

**Q: 번역 파일을 찾을 수 없습니다**
- `lang/ko.ts` 파일이 있는지 확인
- 실행 중 오류 메시지를 확인

### 도움 받기
문제가 발생하면:
1. 먼저 복원 옵션을 시도
2. 콘솔 출력에서 오류 메시지 확인
3. 상세한 정보와 함께 GitHub 이슈 등록

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 확인하세요.

## 🙏 감사의 말

- 훌륭한 IDE를 만들어 주신 Cursor 팀에게 감사드립니다
- 다양한 IDE 현지화 프로젝트들에서 영감을 받았습니다
- 테스트와 피드백을 제공해 주신 커뮤니티 기여자분들께 감사드립니다

---

**면책조항**: 이 도구는 Cursor나 Anysphere와 공식적으로 연관되지 않습니다. 본인의 책임 하에 사용하시기 바랍니다. 서드파티 도구 사용 전에는 항상 중요한 데이터를 백업하시기 바랍니다.
