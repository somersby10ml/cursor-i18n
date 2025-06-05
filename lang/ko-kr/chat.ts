import { type Replacement } from '../types';

export default [
  // Basic settings
  {
    originalText: 'Auto-Select Code Regions for Quick Edit \\((Ctrl|Cmd)\\+K\\)',
    changeText: '빠른 편집($1+K)용 코드 영역 자동 선택',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Automatically parse links when pasted into Quick Edit \\((Ctrl|Cmd)\\+K\\) input',
    changeText: '빠른 편집($1+K) 입력에 붙여넣을 때 링크 자동 구문 분석',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Show a hint for (Ctrl|Cmd)\\+K in the Terminal',
    changeText: '터미널에서 $1+K에 대한 힌트 표시',
    searchType: 'regex',
    flags: 'g',
  },
  {
    originalText: 'Preview Box for Terminal (Ctrl|Cmd)\\+K',
    changeText: '터미널 $1+K용 미리보기 상자',
    searchType: 'regex',
    flags: 'g',
  },

  // Basic settings
  {
    originalText: 'Default Mode',
    changeText: '기본 모드',
    searchType: 'exact',
  },
  {
    originalText: 'Mode for new chats',
    changeText: '새 채팅의 모드',
    searchType: 'exact',
  },
  {
    originalText: 'Text Size',
    changeText: '텍스트 크기',
    searchType: 'exact',
  },
  {
    originalText: 'Adjust the text size of Chat messages',
    changeText: '채팅 메시지의 텍스트 크기 조정',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Clear Chat',
    changeText: '자동 채팅 지우기',
    searchType: 'exact',
  },
  {
    originalText: 'After periods of inactivity, open the Chat Pane to a new chat',
    changeText: '비활성 상태가 지속되면 채팅 패널을 새 채팅으로 열기',
    searchType: 'exact',
  },
  {
    originalText: 'Scroll to New Messages',
    changeText: '새 메시지로 스크롤',
    searchType: 'exact',
  },
  {
    originalText: 'Scroll Chat to incoming message',
    changeText: '수신 메시지로 채팅 스크롤',
    searchType: 'exact',
  },
  {
    originalText: 'Completion Sound',
    changeText: '완료 소리',
    searchType: 'exact',
  },
  {
    originalText: 'Play a sound when Agent finishes responding',
    changeText: '에이전트가 응답을 완료할 때 소리 재생',
    searchType: 'exact',
  },
  {
    originalText: 'Custom Modes',
    changeText: '사용자 정의 모드',
    searchType: 'exact',
  },
  {
    originalText: 'Create custom modes with specific models, tools, keybindings, and instructions tailored to your workflow',
    changeText: '워크플로우에 맞춤화된 특정 모델, 도구, 키 바인딩 및 지침으로 사용자 정의 모드 생성',
    searchType: 'exact',
  },

  // Context Section
  {
    originalText: 'Context',
    changeText: '컨텍스트',
    searchType: 'exact',
  },
  {
    originalText: 'Include Full-Folder Context',
    changeText: '전체 폴더 컨텍스트 포함',
    searchType: 'exact',
  },
  {
    originalText: 'Allow full contents of the selected folder to be included in the context',
    changeText: '선택된 폴더의 전체 내용을 컨텍스트에 포함하도록 허용',
    searchType: 'exact',
  },
  {
    originalText: 'Include Project Structure',
    changeText: '프로젝트 구조 포함',
    searchType: 'exact',
  },
  {
    originalText: 'Include a simplified directory tree as context',
    changeText: '간소화된 디렉토리 트리를 컨텍스트로 포함',
    searchType: 'exact',
  },
  {
    originalText: 'Web Search Tool',
    changeText: '웹 검색 도구',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to search the web for relevant information',
    changeText: '에이전트가 관련 정보를 웹에서 검색하도록 허용',
    searchType: 'exact',
  },
  {
    originalText: 'Hierarchical Cursor Ignore',
    changeText: '계층적 Cursor 무시',
    searchType: 'exact',
  },
  {
    originalText: 'Apply .cursorignore files to all subdirectories. Changing this setting will require a restart of Cursor.',
    changeText: '.cursorignore 파일을 모든 하위 디렉토리에 적용합니다. 이 설정을 변경하면 Cursor를 다시 시작해야 합니다.',
    searchType: 'exact',
  },
  {
    originalText: 'Backspace Removes Context',
    changeText: '백스페이스로 컨텍스트 제거',
    searchType: 'exact',
  },
  {
    originalText: 'Remove the last context pill in the composer when pressing backspace at the start of the input',
    changeText: '입력 시작 부분에서 백스페이스를 누를 때 컴포저의 마지막 컨텍스트 알약 제거',
    searchType: 'exact',
  },

  // Applying Changes 섹션
  {
    originalText: 'Applying Changes',
    changeText: '변경 사항 적용',
    searchType: 'exact',
  },
  {
    originalText: 'Out-of-Context Edits in Manual Mode',
    changeText: '수동 모드에서 컨텍스트 외부 편집',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to edit files outside of the selected context in Manual Mode',
    changeText: '수동 모드에서 에이전트가 선택된 컨텍스트 외부의 파일을 편집하도록 허용',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Fix Lints',
    changeText: '자동 린트 수정',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically fix lint errors in the chat',
    changeText: '채팅에서 린트 오류 자동 수정',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Accept on Commit',
    changeText: '커밋 시 자동 승인',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically accept all changes when files are committed and no longer in the worktree',
    changeText: '파일이 커밋되고 워크트리에 더 이상 없을 때 모든 변경 사항 자동 승인',
    searchType: 'exact',
  },

  // Auto-Run 섹션
  {
    originalText: 'Auto-Run',
    changeText: '자동 실행',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Run Mode',
    changeText: '자동 실행 모드',
    searchType: 'exact',
  },
  {
    originalText: 'Allow Agent to run tools like command execution and file writes without asking for confirmation',
    changeText: '에이전트가 확인을 요청하지 않고 명령 실행 및 파일 쓰기와 같은 도구를 실행하도록 허용',
    searchType: 'exact',
  },

  // Inline Editing & Terminal Section
  {
    originalText: 'Inline Editing & Terminal',
    changeText: '인라인 편집 및 터미널',
    searchType: 'exact',
  },
  {
    originalText: 'Toolbar on Selection',
    changeText: '선택 시 도구모음',
    searchType: 'exact',
  },
  {
    originalText: 'Show Add to Chat & Quick Edit buttons when selecting code',
    changeText: '코드 선택 시 채팅에 추가 및 빠른 편집 버튼 표시',
    searchType: 'exact',
  },
  {
    originalText: 'Auto-Parse Links',
    changeText: '자동 링크 구문 분석',
    searchType: 'exact',
  },
  {
    originalText: 'Automatically select regions for inline code editing',
    changeText: '인라인 코드 편집을 위한 영역 자동 선택',
    searchType: 'exact',
  },
  {
    originalText: 'Themed Diff Backgrounds',
    changeText: '테마 차이점 배경',
    searchType: 'exact',
  },
  {
    originalText: 'Use themed background colors for inline code diffs',
    changeText: '인라인 코드 차이점에 테마 배경 색상 사용',
    searchType: 'exact',
  },
  {
    originalText: 'Character-Level Diffs',
    changeText: '문자 단위 차이점',
    searchType: 'exact',
  },
  {
    originalText: 'Use character-level diffs for inline code diffs',
    changeText: '인라인 코드 차이점에 문자 단위 차이점 사용',
    searchType: 'exact',
  },
  {
    originalText: 'Terminal Tooltips',
    changeText: '터미널 툴팁',
    searchType: 'exact',
  },
  {
    originalText: 'Show tooltips like "Add to chat" in the terminal',
    changeText: '터미널에서 "채팅에 추가"와 같은 툴팁 표시',
    searchType: 'exact',
  },
  {
    originalText: 'Terminal Hint',
    changeText: '터미널 힌트',
    searchType: 'exact',
  },
  {
    originalText: 'Use a preview box instead of streaming responses directly into the shell',
    changeText: '셸에 직접 응답을 스트리밍하는 대신 미리보기 상자 사용',
    searchType: 'exact',
  },

  // Version/status indicators pattern

  // File extension patterns
  {
    originalText: '\\.cursorignore files',
    changeText: '.cursorignore 파일',
    searchType: 'regex',
    flags: 'g',
  },

  // Generic button/action text patterns
  {
    originalText: '"([^"]+)"',
    changeText: '"$1"', // Keep quoted text as-is, could be customized
    searchType: 'regex',
    flags: 'g',
  },

  // Common UI elements
  {
    originalText: 'Agent',
    changeText: '에이전트',
    searchType: 'exact',
  },
  {
    originalText: 'Default',
    changeText: '기본값',
    searchType: 'exact',
  },

] satisfies Replacement[];
