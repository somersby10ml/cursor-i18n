/**
 * Cursor 언어 패처 - 프로토콜 인터셉터
 * 
 * 원본 Cursor 파일을 수정하지 않고 번역된 버전으로 리디렉션합니다.
 */

import { session, app } from 'electron';
import { existsSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';

// 설정
const TARGET_FILENAME = 'workbench.desktop.main.js';
const TRANSLATED_FILENAME = 'workbench.desktop.main_translated.js';
const TARGET_SCHEME = 'vscode-file';

/**
 * vscode-file:// URL을 파일시스템 경로로 변환
 */
function vscodeUrlToPath(url) {
    try {
        if (!url || typeof url !== 'string') {
            return null;
        }

        const parsedUrl = new URL(url);

        if (parsedUrl.protocol !== `${TARGET_SCHEME}:`) {
            return null;
        }

        let pathname = parsedUrl.pathname;

        // Windows 경로 정규화
        if (process.platform === 'win32' && pathname.startsWith('/') && pathname.length > 2 && pathname[2] === ':') {
            pathname = pathname.substring(1);
        }

        return decodeURIComponent(pathname);
    } catch (error) {
        return null;
    }
}

/**
 * 번역 파일로 리디렉션해야 하는지 확인
 */
function shouldRedirect(filePath) {
    if (!filePath || typeof filePath !== 'string') {
        return false;
    }

    try {
        const fileName = basename(filePath);
        if (fileName !== TARGET_FILENAME) {
            return false;
        }

        const dir = dirname(filePath);
        const translatedPath = join(dir, TRANSLATED_FILENAME);

        return existsSync(translatedPath);
    } catch (error) {
        return false;
    }
}

/**
 * 번역된 파일로 리디렉션된 URL 생성
 */
function createRedirectUrl(originalUrl) {
    try {
        const urlObj = new URL(originalUrl);
        const originalPath = urlObj.pathname;
        const dir = dirname(originalPath);
        const newPath = join(dir, TRANSLATED_FILENAME).replace(/\\/g, '/');

        urlObj.pathname = newPath;
        return urlObj.toString();
    } catch (error) {
        return originalUrl;
    }
}

/**
 * 프로토콜 핸들러 패치 적용
 */
function applyProtocolPatch() {
    try {
        const originalRegisterFileProtocol = session.defaultSession.protocol.registerFileProtocol;

        session.defaultSession.protocol.registerFileProtocol = function (scheme, handler) {
            if (scheme === TARGET_SCHEME) {
                console.log(`[Patcher] Intercepting '${scheme}' protocol`);

                const wrappedHandler = (request, callback) => {
                    const originalUrl = request.url;
                    const filePath = vscodeUrlToPath(originalUrl);

                    if (filePath && shouldRedirect(filePath)) {
                        const redirectUrl = createRedirectUrl(originalUrl);
                        console.log(`[Patcher] ✅ Redirecting: ${TARGET_FILENAME} → ${TRANSLATED_FILENAME}`);

                        const modifiedRequest = { ...request, url: redirectUrl };
                        return handler(modifiedRequest, callback);
                    }

                    return handler(request, callback);
                };

                return originalRegisterFileProtocol.call(this, scheme, wrappedHandler);
            }

            return originalRegisterFileProtocol.call(this, scheme, handler);
        };

        console.log('[Patcher] ✅ Protocol interceptor installed successfully');

    } catch (error) {
        console.error('[Patcher] ❌ Failed to install protocol interceptor:', error.message);
    }
}

/**
 * 초기화
 */
function initialize() {
    if (app.isReady()) {
        applyProtocolPatch();
    } else {
        app.whenReady().then(applyProtocolPatch);
    }
}

// 시작
console.log('[Patcher] 🚀 Cursor Language Patcher v2.0');
initialize();

// 원본 main.js 로드
import './main.js';