const macCursorIdeInstallPath = '/Applications/Cursor.app/Contents/';

export async function getWindowsCursorIdeInstallPath() {
  const mod = await import('./registry');
  return mod.getWindowsCursorIdeInstallPathMethod1();
}

export function getMacCursorIdeInstallPath() {
  return macCursorIdeInstallPath;
}
