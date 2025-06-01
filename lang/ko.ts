import { type Replacement } from "./types";

export const REPLACEMENTS: Replacement[] = [

  // Left Menu
  { originalText: "General", changeText: "일반", searchType: "exact" },
  { originalText: "Features", changeText: "기능", searchType: "exact" },
  { originalText: "Models", changeText: "모델", searchType: "exact" },
  { originalText: "Indexing", changeText: "인덱싱", searchType: "exact" },
  { originalText: "Beta", changeText: "베타 기능", searchType: "exact" },
  { originalText: "Account", changeText: "계정", searchType: "exact" },

  // General
  { originalText: "You are currently signed in with", changeText: "현재 로그인한 계정", searchType: "partial" },
  { originalText: "Manage", changeText: "관리", searchType: "exact" },
  { originalText: "Log out", changeText: "로그아웃", searchType: "exact" },
  { originalText: "VS Code Import", changeText: "VS Code 가져오기", searchType: "exact" },
  { originalText: "Instantly use all of your extensions, settings and keybindings", changeText: "모든 확장 프로그램, 설정 및 키 바인딩을 즉시 사용할 수 있습니다", searchType: "exact" },
  { originalText: "Import", changeText: "가져오기", searchType: "exact" },
  { originalText: "Appearance", changeText: "모양", searchType: "exact" },
  { originalText: "Configure how Cursor looks and feels.", changeText: "Cursor의 외관과 느낌을 구성합니다.", searchType: "exact" },
  { 
    originalText: "<div><span>Open editor settings.</span> (font, auto-save, word wrap, etc)<br><br><span>Configure keyboard shortcuts.</span> <br><br>Use <span></span> for the command palette, where many editor functions can be controlled.", 
    changeText: "<div><span>편집기 설정을 엽니다.</span> (글꼴, 자동 저장, 자동 줄바꿈 등)<br><br><span>키보드 단축키를 구성합니다.</span> <br><br>많은 편집기 기능을 제어할 수 있는 명령 팔레트를 열려면 <span></span>를 사용하세요.", 
    searchType: "exact" 
  },
  { originalText: "If on, none of your code will be stored by us. If off, we use prompts and telemetry to improve Cursor.", changeText: "활성화하면 코드가 저장되지 않습니다. 비활성화하면 프롬프트와 원격 분석을 사용하여 Cursor를 개선합니다.", searchType: "exact" },
  { originalText: "Privacy mode", changeText: "개인 정보 보호 모드", searchType: "exact" },
  { originalText: "If on, none of your code will be stored by us. If off, we use prompts and telemetry to improve Cursor. This is a machine-level setting, not account-level. Read more.", changeText: "활성화하면 코드가 저장되지 않습니다. 비활성화하면 프롬프트와 원격 분석을 사용하여 Cursor를 개선합니다. 이는 계정 수준이 아닌 기기 수준 설정입니다. 자세히 보기.", searchType: "exact" },
  { originalText: "Enabled (all code remains private)", changeText: "활성화됨 (모든 코드는 비공개로 유지됨)", searchType: "exact" },
  { originalText: "Any questions?", changeText: "질문이 있으신가요?", searchType: "exact" },
  { originalText: "Check out our docs or join our forum.", changeText: "문서를 확인하거나 포럼에 가입하세요.", searchType: "exact" },
  { originalText: "Feel free to reach out at", changeText: "언제든지 다음 주소로 연락하세요", searchType: "exact" },

  // Features
  { originalText: "A powerful Copilot replacement that can suggest changes across multiple lines. Previously called Copilot++.", changeText: "여러 줄에 걸쳐 변경 사항을 제안할 수 있는 강력한 Copilot 대체 도구입니다. 이전에는 Copilot++라고 불렸습니다.", searchType: "exact" },
  { originalText: "Partial accepts", changeText: "부분 수락", searchType: "exact" },
  { originalText: "Accept the next word of a suggestion via", changeText: "다음 키를 통해 제안의 다음 단어를 수락합니다.", searchType: "partial" },
  
  { originalText: "Suggestions in Comments", changeText: "주석에서 제안", searchType: "exact" },
  { originalText: "Enable Cursor Tab suggestions in comments", changeText: "주석에서 Cursor Tab 제안을 활성화합니다.", searchType: "exact" },

  { originalText: "Show whitespace only changes", changeText: "공백만 변경 사항 표시", searchType: "exact" },
  { originalText: "Show whitespace only Cursor Tab suggestions", changeText: "공백만 Cursor Tab 제안 표시", searchType: "exact" },
  { originalText: "Auto Import", changeText: "자동 가져오기", searchType: "exact" },
  { originalText: "Tab to import necessary modules with Cursor Tab. Only supports", changeText: "Cursor Tab으로 필요한 모듈을 가져오려면 Tab을 누르세요. 다음의 언어만 지원합니다.", searchType: "partial" },
  { originalText: "Auto Import for Python", changeText: "Python용 자동 import", searchType: "exact" },
  { originalText: "BETA", changeText: "베타", searchType: "exact" },
  { originalText: "Enable auto import for Python. This is a beta feature.", changeText: "Python에 대한 자동 Import를 활성화합니다. 이것은 베타 기능입니다.", searchType: "exact" },
  { originalText: "Chat", changeText: "채팅", searchType: "exact" },
  { originalText: "Ask Cursor Agent questions about your codebase, edit multiple files at once, and use tools", changeText: "Cursor Agent에게 코드베이스에 대한 질문을 하고, 여러 파일을 동시에 편집하며, 도구를 사용할 수 있습니다.", searchType: "exact" },
  { originalText: "Default new chat mode", changeText: "기본 새 채팅 모드", searchType: "exact" },
  { originalText: "New chats will open on this mode", changeText: "새 채팅은 이 모드에서 열립니다.", searchType: "exact" },
  { originalText: "Agent", changeText: "에이전트", searchType: "exact" },
  { originalText: "Chat text size", changeText: "채팅 텍스트 크기", searchType: "exact" },
  { originalText: "Adjust the text size of AI chat messages", changeText: "AI 채팅 메시지의 텍스트 크기를 조정합니다.", searchType: "exact" },
  { originalText: "Default", changeText: "기본값", searchType: "exact" },
  { originalText: "Auto-refresh chats", changeText: "채팅 자동 새로고침", searchType: "exact" },
  { originalText: "Automatically create a new chat after inactivity when opening the chat pane", changeText: "채팅 창을 열 때 비활성 상태일 때 자동으로 새 채팅을 생성합니다.", searchType: "exact" },  
  { originalText: "Auto-scroll to bottom", changeText: "채팅창 하단 자동 스크롤", searchType: "exact" },
  { originalText: "Automatically scroll to the bottom of the chat pane when a new message is generated", changeText: "새 메시지가 생성될 때 채팅창 하단으로 자동 스크롤합니다.", searchType: "exact" },
  { originalText: "Auto-apply to files outside context in Manual mode", changeText: "Manual mode에서 외부 파일 자동 적용", searchType: "exact" },
  { originalText: "Allow the chat in Manual mode to auto-apply changes to files outside the current context", changeText: "Manual mode에서 채팅이 현재 컨텍스트 외부의 파일에 변경 사항을 자동으로 적용하도록 허용", searchType: "exact" },
  { originalText: "Include project structure", changeText: "프로젝트 구조 포함", searchType: "exact" },
  { originalText: "Include a simplified directory tree to give the model a sense of your codebase layout", changeText: "모델이 코드베이스 레이아웃을 이해할 수 있도록 단순화된 디렉토리 트리를 포함합니다.", searchType: "exact" },
  { originalText: "Full folder contents", changeText: "전체 폴더 내용", searchType: "exact" },
  { originalText: "Enable full folder contents instead of a tree outline of the folder structure", changeText: "폴더 구조의 트리 개요 대신 전체 폴더 내용을 활성화합니다.", searchType: "exact" },
  { originalText: "Enable auto-run mode", changeText: "자동 실행 모드 활성화", searchType: "exact" },
  { originalText: "Allow Agent to run tools without asking for confirmation, such as executing commands and writing to files", changeText: "명령 실행이나 파일 쓰기와 같은 작업을 할 때 에이전트가 확인 없이 도구를 실행할 수 있도록 허용합니다.", searchType: "exact" },
  { originalText: "Command allowlist", changeText: "명령 허용 목록", searchType: "exact" },
  { originalText: "Add commands here if only very specific commands should be executed automatically", changeText: "매우 특정한 명령만 자동으로 실행해야 하는 경우 여기에 명령을 추가합니다.", searchType: "exact" },
  { originalText: "Add", changeText: "추가", searchType: "exact" },  
  { originalText: "Command denylist", changeText: "명령어 차단 목록", searchType: "exact" },
  { originalText: "Commands which should never be executed automatically", changeText: "자동으로 실행되면 안 되는 명령어 목록입니다.", searchType: "exact" },
  { originalText: "Delete file protection", changeText: "파일 삭제 보호", searchType: "exact" },
  { originalText: "If enabled, prevents the agent from deleting files automatically", changeText: "사용 설정하면 에이전트가 파일을 자동으로 삭제하지 못하도록 합니다.", searchType: "partial" },
  { originalText: "MCP tools protection", changeText: "MCP 도구 보호", searchType: "exact" },
  { originalText: "If enabled, prevents the agent from running MCP tools automatically", changeText: "활성화하면 에이전트가 MCP 도구를 자동으로 실행하지 못하도록 합니다.", searchType: "partial" },
  { originalText: "Dot files protection", changeText: "점으로 시작하는 파일 보호", searchType: "exact" },
  { originalText: "If enabled, prevents the agent from modifying dot files (like .gitignore) automatically", changeText: "사용 설정하면 에이전트가 도트 파일(.gitignore 등)을 자동으로 수정하지 못하도록 합니다.", searchType: "partial" },  
  { originalText: "Outside workspace protection", changeText: "워크스페이스 외부 보호", searchType: "exact" },
  { originalText: "If enabled, prevents the agent from creating or modifying files outside the workspace automatically", changeText: "활성화하면 에이전트가 워크스페이스 외부의 파일을 자동으로 생성하거나 수정하는 것을 방지합니다.", searchType: "partial" },  
  { originalText: "Dialog 'Don't ask again' preferences", changeText: "'다시 묻지 않음' 대화상자 설정", searchType: "exact" },
  { originalText: "Manage dialogs that you've previously selected 'Don't ask again' for", changeText: "이전에 '다시 묻지 않음'을 선택한 대화상자를 관리합니다.", searchType: "exact" },
  { originalText: "Collapse input box pills in pane or editor", changeText: "창 또는 편집기에서 입력 상자 태그 접기", searchType: "exact" },
  { originalText: "Collapse pills in the chat pane or editor input box to save space", changeText: "채팅창 또는 편집기 입력 상자에서 태그를 축소하여 공간을 절약하세요.", searchType: "exact" },



{ originalText: "Iterate on lints", changeText: "린트 반복 실행", searchType: "exact" },
{ originalText: "If enabled, chat in agent mode will iterate on linter errors to fix them automatically", changeText: "활성화하면 에이전트 모드의 채팅에서 린터 오류를 자동으로 수정하기 위해 반복 실행합니다", searchType: "exact" },
{ originalText: "Hierarchical Cursor Ignore", changeText: "계층적 커서 무시", searchType: "exact" },
{ originalText: "When enabled, .cursorignore files will apply to all subdirectories", changeText: "활성화했을 때 .cursorignore 파일이 모든 하위 디렉토리에 적용됩니다", searchType: "partial" },
{ originalText: "Changing this setting will require a restart of Cursor.", changeText: "이 설정을 변경하려면 Cursor를 재시작해야 합니다.", searchType: "partial" },

{ originalText: "Auto-accept diffs", changeText: "변경사항 자동 수락", searchType: "exact" },
{ originalText: "If enabled, all diffs in the composer will be accepted once they are no longer in the worktree", changeText: "활성화된 경우 작업 트리에서 사라진 모든 변경사항이 작성기에서 자동으로 수락됩니다", searchType: "exact" },
{ originalText: "Custom modes", changeText: "사용자 지정 모드", searchType: "exact" },
{ originalText: "Allow the creation of custom modes", changeText: "사용자 지정 모드 생성 허용", searchType: "exact" },
{ originalText: "Play sound on finish", changeText: "완료 시 소리 재생", searchType: "exact" },
{ originalText: "Play a sound when a chat response is completed", changeText: "채팅 응답이 완료되면 소리를 재생합니다", searchType: "exact" },
{ originalText: "Auto Group Changes", changeText: "변경사항 자동 그룹화", searchType: "exact" },
{ originalText: "Automatically group changes made in a chat session with an LLM for you to review", changeText: "LLM과의 채팅 세션에서 이루어진 변경사항을 자동으로 그룹화하여 검토할 수 있게 합니다", searchType: "exact" },
{ originalText: "Web Search Tool", changeText: "웹 검색 도구", searchType: "exact" },
{ originalText: "This will allow chat in agent/ask mode to search the web for information", changeText: "에이전트/질문 모드의 채팅이 정보를 찾기 위해 웹을 검색할 수 있도록 합니다", searchType: "exact" },
{ originalText: "Docs\nAdd new doc", changeText: "문서\n새 문서 추가", searchType: "exact" },
{ originalText: "Manage the custom docs that you've added.", changeText: "추가한 사용자 지정 문서를 관리합니다.", searchType: "exact" },
{ originalText: "No docs added yet... Type \"@Add\" in a chat or in an edit to start a doc.\nEditor", changeText: "아직 추가된 문서가 없습니다... 채팅이나 편집에서 \"@Add\"를 입력하여 문서를 시작하세요.\n편집기", searchType: "exact" },
{ originalText: "Show chat/edit tooltip", changeText: "채팅/편집 툴팁 표시", searchType: "exact" },
{ originalText: "Show a chat/edit tooltip near highlighted code in the editor", changeText: "편집기에서 강조 표시된 코드 근처에 채팅/편집 도움말을 표시합니다", searchType: "exact" },
{ originalText: "Auto parse inline edit links", changeText: "인라인 편집 링크 자동 파싱", searchType: "exact" },
{ originalText: "Automatically parse links when pasted into", changeText: "입력에 붙여넣을 때 링크를 자동으로 파싱합니다", searchType: "partial" },
{ originalText: "Auto select for", changeText: "자동 선택", searchType: "partial" },
{ originalText: "Automatically select regions for inline code editing", changeText: "인라인 코드 편집을 위해 영역을 자동으로 선택합니다", searchType: "exact" },
{ originalText: "Use themed diff backgrounds", changeText: "테마 적용 변경사항 배경 사용", searchType: "exact" },
{ originalText: "Use themed background colors for inline diffs", changeText: "인라인 변경사항에 테마 배경색을 사용합니다", searchType: "exact" },
{ originalText: "Use character-level diffs", changeText: "문자 수준 변경사항 사용", searchType: "exact" },
{ originalText: "Use character-level diffs for inline diffs", changeText: "인라인 변경사항에 문자 수준 변경사항을 사용합니다", searchType: "exact" },
{ originalText: "Terminal hint", changeText: "터미널 힌트", searchType: "exact" },
{ originalText: "Show the hint text at the bottom of the terminal", changeText: "터미널 하단에 힌트 텍스트를 표시합니다", searchType: "exact" },
{ originalText: "Show terminal hover hint", changeText: "터미널 마우스 오버 힌트 표시", searchType: "exact" },
{ originalText: "Show hints like 'Add to chat' in the terminal", changeText: "터미널에 '채팅에 추가'와 같은 힌트를 표시합니다", searchType: "exact" },
{ originalText: "Use preview box for terminal", changeText: "터미널에 미리보기 상자 사용", searchType: "partial"},
{ originalText: "If turned off, responses are streamed directly into the shell", changeText: "비활성화하면 응답이 셸에 직접 스트리밍됩니다", searchType: "exact"},

{ originalText: "Beta features", changeText: "베타 기능", searchType: "exact"},
{ originalText: "Update frequency", changeText: "업데이트 빈도", searchType: "exact"},
{ originalText: "Get updates as soon as they are ready. Early Access updates may be unstable for production work.", changeText: "준비되는 즉시 업데이트를 받습니다. 얼리 액세스 업데이트는 프로덕션 작업에서 불안정할 수 있습니다.", searchType: "exact"},
{ originalText: "Standard", changeText: "표준", searchType: "exact"},
{ originalText: "Notepads", changeText: "노트패드", searchType: "exact"},
{ originalText: "Craft and share context between chat and composers", changeText: "채팅과 컴포저 간에 컨텍스트를 작성하고 공유", searchType: "exact"},
{ originalText: "Bug Finder", changeText: "버그 파인더", searchType: "exact"},
{ originalText: "Run a bug finder on your current git diff to find bugs.", changeText: "현재 git diff에서 버그 파인더를 실행하여 버그를 찾습니다.", searchType: "exact"},
{ originalText: "<div><div>Check out the Bug Finder tab in the Activity Bar.", changeText: "<div><div>활동 표시줄의 버그 파인더 탭을 확인하세요.", searchType: "exact"},
{ originalText: "Background Agent", changeText: "백그라운드 에이전트", searchType: "exact"},
{ originalText: "Enable the background agent, in beta. Allows you to run agents in the cloud.", changeText: "베타 버전인 백그라운드 에이전트를 활성화합니다. 클라우드에서 에이전트를 실행할 수 있습니다.", searchType: "exact"},


{ originalText: "<h3>Enable Background Agents (preview)", changeText: "<h3>백그라운드 에이전트 활성화 (미리보기)", searchType: "exact" },
{ originalText: '<div>Background agents run in parallel in their own remote developer environments. This feature is in <strong>beta</strong>, and has a few caveats:', changeText: '<div>백그라운드 에이전트는 자체 원격 개발 환경에서 병렬로 실행됩니다. 이 기능은 <strong>베타</strong>이며 몇 가지 주의사항이 있습니다:', searchType: "exact" },
{ originalText: '<ul><li><strong>Privacy:</strong> During the preview period, background agents are only available if you have privacy mode disabled.</li><li><strong>Security:</strong> Background agents run in isolated remote environments. We have prioritized security while building this, but the code has not yet been audited. Please email security@cursor.com with any concerns.</li><li><strong>Cost:</strong> During the preview period, background agents cost the same as normal agents (but only MAX models are supported, which can be quite expensive).', changeText: '<ul><li><strong>개인 정보 보호:</strong> 미리보기 기간 동안 백그라운드 에이전트는 개인 정보 보호 모드를 비활성화한 경우에만 사용할 수 있습니다.</li><li><strong>보안:</strong> 백그라운드 에이전트는 격리된 원격 환경에서 실행됩니다. 이 기능을 구축하는 동안 보안을 우선시했지만, 코드가 아직 감사되지 않았습니다. 우려 사항이 있으면 security@cursor.com으로 이메일을 보내주세요.</li><li><strong>비용:</strong> 미리보기 기간 동안 백그라운드 에이전트는 일반 에이전트와 동일한 비용이 발생합니다(단, 꽤 비용이 많이 들 수 있는 MAX 모델만 지원됩니다).', searchType: "exact" },

  { originalText: '<div>You can find more details at <span>docs.cursor.com/background-agent</span>.', changeText: '<div>자세한 내용은 <span>docs.cursor.com/background-agent</span>를 참조하세요.', searchType: "exact" },

  { originalText: '<div class="mt-4 mb-4 relative">To enable background agents in preview, please <span>go to Settings</span> and disable privacy mode.', changeText: '<div class="mt-4 mb-4 relative">미리보기에서 백그라운드 에이전트를 활성화하려면 <span>go to Settings</span> 을 눌러 설정으로 이동 하여 개인 정보 보호 모드를 비활성화하세요.', searchType: "exact" },

{ originalText: "Codebase Indexing", changeText: "코드베이스 인덱싱", searchType: "exact"},

{originalText: 'Embeddings improve your codebase-wide answers. Embeddings and metadata are stored in the', changeText: '임베딩은 코드베이스 전체 답변을 개선합니다. 임베딩과 메타데이터는 다음 위치에 저장됩니다. ', searchType: "exact"},
{originalText: ', but all code is stored locally.', changeText: ', 하지만 모든 코드는 로컬에 저장됩니다.', searchType: "exact"},


{ originalText: "Synced (11 files)", changeText: "동기화됨 (11개 파일)", searchType: "exact"},
{ originalText: "Resync Index", changeText: "인덱스 재동기화", searchType: "exact"},
{ originalText: "Delete Index", changeText: "인덱스 삭제", searchType: "exact"},
{ originalText: "Index new folders by default", changeText: "기본적으로 새 폴더 인덱싱", searchType: "exact"},
{ originalText: "Enabled", changeText: "활성화됨", searchType: "exact"},

{ originalText: "Ignore files", changeText: "파일 무시", searchType: "exact"},
{ originalText: "Configure ignored files", changeText: "무시할 파일 구성", searchType: "exact"},
{
   originalText: "Configure the files that Cursor will ignore when indexing your repository (in addition to your .gitignore).", 
   changeText: "저장소를 인덱싱할 때 Cursor가 무시할 파일을 구성합니다.", 
   searchType: "exact"
},
{ originalText: "Git graph file relationships", changeText: "Git 그래프 파일 관계", searchType: "exact"},
{ originalText: 'When set to true, Cursor will by default index any new folders opened. If turned off, you can still manually index folders by clicking the "Compute Index" button. Folders with more than', changeText: '활성화 시 Cursor는 기본적으로 새로 열리는 모든 폴더를 색인합니다. 이 기능을 끄더라도 "인덱스 계산" 버튼을 클릭하여 폴더를 수동으로 색인할 수 있습니다.', searchType: "exact"},

{originalText: "files will not be auto-indexed.", changeText: " 개의 파일은 자동으로 인덱싱되지 않습니다.", searchType: "exact"},

{originalText: 'When enabled, Cursor will index your git history to help understand whi   ch files are related to each other. Code and commit messages are stored locally, but metadata about commits (SHAs, number of changes, and obfuscated file names) are stored on the server.',
  changeText: '활성화하면 Cursor는 git 기록을 인덱싱하여 파일 간의 관계를 이해하는 데 도움을 줍니다. 코드와 커밋 메시지는 로컬에 저장되지만 커밋에 대한 메타데이터(SHA, 변경 사항 수 및 난독화된 파일 이름)는 서버에 저장됩니다.',
  searchType: "exact"
},

// Editor Settings -> Cursor
{originalText: 'Automatically select regions for inline code editing',
  changeText: '인라인 코드 편집을 위해 영역을 자동으로 선택합니다',
  searchType: "exact"
},

{
  originalText: 'Automatically select regions for inline code editing',
  changeText: '인라인 코드 편집을 위해 영역을 자동으로 선택합니다',
  searchType: "exact"
},


{
  originalText: 'Show hover hint in the terminal',
  changeText: '터미널에서 마우스 오버 힌트 표시',
  searchType: "exact"
},
{
  originalText: 'Automatically select regions for inline code editing',
  changeText: '인라인 코드 편집을 위해 영역을 자동으로 선택합니다',
  searchType: "exact"
},
{originalText: 'Enable Cmd+P / Ctrl+P shortcut for file picker in Composer',
  changeText: '컴포저에서 파일 선택기를 위한 Cmd+P / Ctrl+P 단축키 활성화',
  searchType: "exact"
},
{originalText: 'Collapse input box pills in the composer pane',
  changeText: '컴포저 창에서 입력 상자 태그 접기',
  searchType: "exact"
},

{
  originalText: 'Enable the creation of custom modes',
  changeText: '사용자 지정 모드 생성 허용',
  searchType: "exact"
},
{
  originalText: 'Automatically accept all diffs in the composer once they are no longer in the worktree',
  changeText: '작업 트리에서 사라진 후 컴포저에서 모든 변경 사항을 자동으로 수락합니다',
  searchType: "exact"
}
,{originalText: 'Automatically save files in normal composers',
  changeText: '일반 컴포저에서 파일 자동 저장',
  searchType: "exact"
},
{originalText: 'Automatically scroll to the bottom of the composer pane when a new message is generated',
  changeText: '새 메시지가 생성될 때 컴포저 창 하단으로 자동 스크롤합니다',
  searchType: "exact"
},
{
  originalText: 'Queue submitted messages when the composer is generating',
  changeText: '컴포저가 생성 중일 때 제출된 메시지를 대기열에 추가합니다',
  searchType: "exact"
},
{originalText: 'Show markdown hover participant actions',
  changeText: '마크다운 마우스 오버 참가자 작업 표시',
  searchType: "exact"
},
{originalText: 'Show suggested files in the composer',
  changeText: '컴포저에서 제안된 파일 표시',
  searchType: "exact"
},

{originalText: 'Controls the text size scale (relative to base 12px) of AI chat messages.',
  changeText: 'AI 채팅 메시지의 텍스트 크기 배율을 조정합니다 (기본 12px 기준).',
   searchType: "exact" },

   {
    originalText: 'Disable Cursor Tab for these languages',
    changeText: '이 언어에 대해 Cursor Tab 비활성화',
    searchType: "exact"
   },

   {
    originalText: 'Enable partial accepts for Cursor Tab, using the editor.action.inlineSuggest.acceptNextWord keybinding',
    changeText: 'Cursor Tab에 대해 부분 수락을 활성화하고, editor.action.inlineSuggest.acceptNextWord 키 바인딩을 사용합니다',
    searchType: "exact"
   },

   {
    originalText: 'Use character level diffs for inline diffs',
    changeText: '인라인 변경 사항에 문자 수준 변경 사항 사용',
    searchType: "exact"
   },

   {
    originalText: "Disable HTTP/2 for all requests, and use HTTP/1.1 instead. This increases resource utilization and latency, but is useful if you're behind a corporate proxy that blocks HTTP/2.",
    changeText: "모든 요청에 대해 HTTP/2를 비활성화하고 HTTP/1.1을 사용합니다. 이는 리소스 사용량과 대기 시간을 증가시키지만, HTTP/2를 차단하는 기업 프록시 뒤에 있는 경우 유용합니다.",
    searchType: "exact"
   },
   {
    originalText: 'Warning: this will increase the memory usage of Cursor. Some AI features use the shadow workspace to refine code in the background before presenting it to you. The shadow workspace is a hidden window running on your local machine in a copy of your current workspace.',
    changeText: '경고: 이 설정은 Cursor의 메모리 사용량을 증가시킵니다. 일부 AI 기능은 코드를 사용자에게 제시하기 전에 백그라운드에서 개선하기 위해 그림자 작업 공간을 사용합니다. 그림자 작업 공간은 현재 작업 공간의 복사본에서 로컬 머신에서 실행되는 숨겨진 창입니다.',
    searchType: "exact"
   },
   {
    originalText: 'Index your git history to help Cursor understand which files are related to each other. Code and commit messages are stored locally, but metadata about commits (SHAs, number of changes, and encrypted file names) are stored on the server.',
    changeText: 'Cursor가 파일 간의 관계를 이해하는 데 도움이 되도록 git 기록을 인덱싱합니다. 코드와 커밋 메시지는 로컬에 저장되지만, 커밋에 대한 메타데이터(SHA, 변경 사항 수 및 암호화된 파일 이름)는 서버에 저장됩니다.',
    searchType: "exact"
   },
   {
    originalText: 'Global list of files to always ignore in Cursor features, across all workspaces. Uses glob patterns. These patterns have the same effect as adding them to a .cursorignore file in every workspace.',
    changeText: '모든 작업 공간에서 Cursor 기능에서 항상 무시할 파일의 전역 목록입니다. glob 패턴을 사용합니다. 이러한 패턴은 모든 작업 공간에 .cursorignore 파일을 추가하는 것과 동일한 효과를 가집니다.',
    searchType: "exact"
   },

   {
    originalText: 'Show notification toasts in the same location as the chat',
    changeText: '채팅과 동일한 위치에 알림 토스트 표시',
    searchType: "exact"
   },
   {
    originalText: 'If turned off, responses are streamed directly into the shell',
    changeText: '비활성화하면 응답이 셸에 직접 스트리밍됩니다',
    searchType: "exact"
   }


];