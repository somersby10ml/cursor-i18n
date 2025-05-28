import fs from 'fs';
import path from 'path';

interface PackageJson {
    main?: string;
    main_original?: string;
    [key: string]: any;
}

/**
 * package.json의 main 진입점을 변경하여 인터셉터를 활성화
 * @param cursorInstallPath 커서 설치 경로
 * @param interceptorFileName 인터셉터 파일명 (예: cursorTranslatorMain.js)
 */
export function patchPackageJson(cursorInstallPath: string, interceptorFileName: string): void {
    const packageJsonPath = path.join(cursorInstallPath, 'resources', 'app', 'package.json');

    console.log(`[INFO] Patching package.json: ${packageJsonPath}`);

    try {
        // 백업 생성
        const backupPath = `${packageJsonPath}.backup`;
        if (!fs.existsSync(backupPath)) {
            fs.copyFileSync(packageJsonPath, backupPath);
            console.log(`[INFO] Created package.json backup`);
        }

        // package.json 읽기
        const packageContent = fs.readFileSync(packageJsonPath, 'utf-8');
        const packageJson: PackageJson = JSON.parse(packageContent);

        // 원본 main 백업
        if (!packageJson.main_original && packageJson.main) {
            packageJson.main_original = packageJson.main;
            console.log(`[INFO] Backed up original main: ${packageJson.main}`);
        }

        // main을 인터셉터로 변경
        packageJson.main = `./out/${interceptorFileName}`;
        console.log(`[INFO] Changed main to: ${packageJson.main}`);

        // 변경된 package.json 저장
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8');
        console.log(`[INFO] ✅ package.json patched successfully`);

    } catch (error) {
        console.error(`[ERROR] Failed to patch package.json:`, error);
        throw error;
    }
}

/**
 * package.json을 원본으로 복원
 * @param cursorInstallPath 커서 설치 경로
 */
export function restorePackageJson(cursorInstallPath: string): void {
    const packageJsonPath = path.join(cursorInstallPath, 'resources', 'app', 'package.json');
    const backupPath = `${packageJsonPath}.backup`;

    console.log(`[INFO] Restoring package.json from backup`);

    try {
        if (fs.existsSync(backupPath)) {
            fs.copyFileSync(backupPath, packageJsonPath);
            console.log(`[INFO] ✅ package.json restored from backup`);
        } else {
            // 백업이 없으면 main_original 사용
            const packageContent = fs.readFileSync(packageJsonPath, 'utf-8');
            const packageJson: PackageJson = JSON.parse(packageContent);

            if (packageJson.main_original) {
                packageJson.main = packageJson.main_original;
                delete packageJson.main_original;

                fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8');
                console.log(`[INFO] ✅ package.json restored using main_original`);
            } else {
                console.warn(`[WARN] No backup or main_original found`);
            }
        }
    } catch (error) {
        console.error(`[ERROR] Failed to restore package.json:`, error);
        throw error;
    }
}

/**
 * 인터셉터 파일을 커서 설치 폴더에 복사
 * @param cursorInstallPath 커서 설치 경로
 * @param interceptorSourcePath 인터셉터 소스 파일 경로
 * @param fileName 대상 파일명
 */
export function deployInterceptor(
    cursorInstallPath: string,
    interceptorSourcePath: string,
    fileName: string
): void {
    const targetDir = path.join(cursorInstallPath, 'resources', 'app', 'out');
    const targetPath = path.join(targetDir, fileName);

    console.log(`[INFO] Deploying interceptor: ${fileName}`);

    try {
        // 대상 디렉토리 존재 확인
        if (!fs.existsSync(targetDir)) {
            throw new Error(`Target directory does not exist: ${targetDir}`);
        }

        // 원본 main.js 백업 (처음 실행시에만)
        const originalMainPath = path.join(targetDir, 'main.js');
        const originalMainBackupPath = path.join(targetDir, 'main_original.js');

        if (fs.existsSync(originalMainPath) && !fs.existsSync(originalMainBackupPath)) {
            fs.copyFileSync(originalMainPath, originalMainBackupPath);
            console.log(`[INFO] Backed up original main.js`);
        }

        // 인터셉터 파일 복사
        fs.copyFileSync(interceptorSourcePath, targetPath);
        console.log(`[INFO] ✅ Interceptor deployed successfully`);

    } catch (error) {
        console.error(`[ERROR] Failed to deploy interceptor:`, error);
        throw error;
    }
} 