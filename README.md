
# 🌐 Cursor i18n

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Runtime: Bun](https://img.shields.io/badge/Runtime-Bun-beige.svg)](https://bun.sh)
[![Platform: Windows](https://img.shields.io/badge/Platform-Windows-blue.svg)](https://www.microsoft.com/windows/)



**Transform your Cursor IDE into a multilingual powerhouse! 🚀**

Cursor i18n localizes the Cursor IDE interface using a simple command line tool. The project is written in TypeScript and built with [Bun](https://bun.sh). The npm package ships with precompiled JavaScript so you can run it with either Bun or Node.

Use `bunx cursor-i18n` or `npx cursor-i18n` to run the latest version without a global install.


<img src="./images/4.png" width="400">
<img src="./images/3.png" width="400">

## ✨ Features

- ⚡ **Simple Commands** – `apply`, `revert` and `list`
- 🛡️ **Safe Backup & Recovery** – automatically backs up files
- 🖥️ **Windows Support** – works on Windows 10/11 today
- 🌍 **Future Language Expansions** – more locales coming soon


## 🚀 Quick Start

### Prerequisites
- **Windows 10/11**
- **[Cursor IDE](https://www.cursor.com)** – latest version recommended
- **[Bun](https://bun.sh)** – needed only if you build from source
### ⚡ Quick Setup

Run with `bunx` or `npx`:

```bash
# Apply translation using your system locale
bunx cursor-i18n@latest apply # or: npx cursor-i18n@latest apply

# Apply a specific locale
bunx cursor-i18n@latest apply --lang ko-kr # or: npx cursor-i18n@latest apply --lang ko-kr

# Revert to original
bunx cursor-i18n@latest revert # or: npx cursor-i18n@latest revert
```



You can also install globally with `npm install -g cursor-i18n`.

## 🌍 Supported Languages
| Language | Locale Code |
|----------|-------------|
| 🇪🇸 Spanish | `es-es` |
| 🇫🇷 French | `fr-fr` |
| 🇯🇵 Japanese | `ja-jp` |
| 🇰🇷 Korean | `ko-kr` |
| 🇷🇺 Russian | `ru-ru` |
| 🇨🇳 Chinese | `zh-cn` |

More languages will be added in future releases.

## 🎯 Usage

```bash
# Show supported languages
bunx cursor-i18n list

# Help
bunx cursor-i18n --help
```
Use `bunx cursor-i18n --help` to see all available commands.
---

## 🔧 How It Works

Cursor Translate uses a sophisticated, non-invasive approach:

```mermaid
graph TD
    A[🚀 Start Process] --> B[📋 Backup Original Files]
    B --> C[🔧 Install Interceptor]
    C --> D[🌐 Deploy Translation Files]
    D --> E[✅ Patch Applied]
    
    E --> F{Revert Requested?}
    F -->|Yes| G[📂 Restore Backups]
    F -->|No| H[🎉 Enjoy Translated UI]
    
    G --> I[🔄 Original State Restored]
```

### Technical Details

1. **🔒 Safe Backup**: Creates secure backups of all modified files
2. **🎣 Protocol Interception**: Uses Electron's protocol interception for seamless translation
3. **📁 File Structure**:
   ```
   Cursor Installation/
   ├── resources/app/
   │   ├── package.json (interceptor registration)
   │   ├── package.json.backup (original backup)
   │   └── out/
   │       ├── cursorTranslatorMain.js (interceptor)
   │       └── vs/workbench/
   │           ├── workbench.desktop.main.js (original)
   │           └── workbench.desktop.main_translated.js (translated)
   ```

---


## 🛠️ Troubleshooting

<details>
<summary><b>🚨 Patch Not Working?</b></summary>

1. **Close Cursor completely**
2. **Run restore**: `bunx cursor-i18n revert`
3. **Restart as administrator** (if needed)
4. **Reapply patch**: `bunx cursor-i18n apply`
5. **Launch Cursor**

</details>

<details>
<summary><b>🔄 After Cursor Update</b></summary>

Cursor updates may reset the interface. Simply reapply the patch:
```bash
bunx github:somersby10ml/cursor-i18n apply
```

</details>

<details>
<summary><b>🆘 Still Having Issues?</b></summary>

- Check our [comprehensive FAQ](https://github.com/somersby10ml/cursor-i18n/wiki/FAQ)
- Join our [community discussions](https://github.com/somersby10ml/cursor-i18n/discussions)
- Create a [detailed issue report](https://github.com/somersby10ml/cursor-i18n/issues/new)

</details>

---

## ⚠️ Important Notes

- 🔄 **Cursor updates** may require reapplying the patch
- 💾 **Backup your work** before applying patches (good practice!)
- 🔑 **No admin rights** required for standard installation
- 🏢 **Enterprise environments** may have additional restrictions

---


## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**📣 Disclaimer**: This project is not officially affiliated with Cursor or Anysphere.
