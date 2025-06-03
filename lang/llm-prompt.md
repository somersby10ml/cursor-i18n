# 번역 작업 지시사항

## 🎯 작업 목표
TypeScript `REPLACEMENTS` 배열에서 **`changeText` 필드만** "프랑스어 (fr-FR)"로 번역합니다.

## 📋 작업 규칙

### ✅ 해야 할 것
- **`changeText` 필드만** "프랑스어 (fr-FR)"로 정확히 번역
- 원문의 의미와 맥락을 정확히 전달
- 기술 용어나 UI 용어는 해당 언어의 일반적인 표준 번역 사용

### ❌ 절대 하지 말 것
- `originalText` 필드 수정 금지
- `searchType` 필드 수정 금지
- 배열 구조나 객체 구조 변경 금지

## 🏷️ HTML 태그 처리 규칙
1. **태그 구조 완전 보존**: 여는 태그, 닫는 태그, 속성 등 모든 HTML 구조를 원본과 동일하게 유지
2. **잘못된 태그도 그대로**: 태그가 제대로 닫히지 않았어도 강제로 수정하지 않음
3. **태그 내 텍스트만 번역**: HTML 태그명, 속성명, 속성값은 번역하지 않음

## 📝 공백 및 포맷 보존
- **앞뒤 공백 유지**: `" Hello "` → `" {번역} "` (공백 개수까지 정확히)
- **줄바꿈 유지**: `\n`, `\r\n` 등 모든 줄바꿈 문자 보존
- **특수 문자 유지**: 탭, 공백 등 모든 특수 문자 그대로 유지

## 💡 번역 예시

### 일반 텍스트
```typescript
// 원본
{
  originalText: 'General',
  changeText: '일반',
  searchType: 'exact',
}

// "프랑스어 (fr-FR)" 번역 후
{
  originalText: 'General',
  changeText: '{TARGET_LANGUAGE_TRANSLATION}',
  searchType: 'exact',
}
```

### HTML 포함 텍스트
```typescript
// 원본
{
  originalText: '<div class="header"> Settings </div>',
  changeText: '<div class="header"> 설정 </div>',
  searchType: 'exact',
}

// "프랑스어 (fr-FR)" 번역 후
{
  originalText: '<div class="header"> Settings </div>',
  changeText: '<div class="header"> {TARGET_LANGUAGE_TRANSLATION} </div>',
  searchType: 'exact',
}
```

### 공백 포함 텍스트
```typescript
// 원본
{
  originalText: '  Features  ',
  changeText: '  기능  ',
  searchType: 'exact',
}

// "프랑스어 (fr-FR)" 번역 후
{
  originalText: '  Features  ',
  changeText: '  {TARGET_LANGUAGE_TRANSLATION}  ',
  searchType: 'exact',
}
```

---


**⚠️ 중요**: `originalText`는 참조용이므로 절대 수정하지 마세요. 오직 `changeText`만 번역하세요.