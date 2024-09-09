# Web Design Project for Beginners

## 概要

このプロジェクトは、プログラミング初心者である私が、Webデザインを学びながら、ChatGPT4.0、GitHub Copilot、Visual Studio Code、HTML、CSS、JavaScriptを用いて、さまざまなWebサイトを作成・管理するためのものです。作成したコードやデザインは、個人的な資産として保存し、将来再利用できるように整理されています。

このプロジェクトでは、有料版のChatGPT4.0、GitHub Copilot、GSAPをフル活用し、効率的な開発と高品質なアニメーションを目指します。

## インストール

このプロジェクトは個人的な利用を目的としているため、特定のインストール手順はありません。HTML、CSS、JavaScriptが動作する環境（Webブラウザやローカルの開発環境）があれば利用可能です。

**依存関係:**

- [Node.js](https://nodejs.org/)
- [GSAP（有料版）](https://greensock.com/gsap/)

依存関係のインストールは以下のコマンドで行います。

```bash
npm install
```

## 使用方法

1. **ローカル環境での開発**
   - プロジェクトをクローンまたはダウンロードします。
   - 必要な依存関係をインストールした後、以下のコマンドで開発サーバーを起動します。
   
   ```bash
   npm start
   ```
   - ブラウザで `http://localhost:3000` を開き、作成中のWebページを確認できます。

2. **デプロイ**
   - GitHub Pages、Vercel、Netlifyなどのサービスを使ってデプロイできます。

## 機能一覧

- **ChatGPT4.0:** 高度なコード補完や開発サポートを提供します。
- **GitHub Copilot:** 自動コード生成により、開発の効率を向上させます。
- **GSAP:** 全てのプラグインが使用可能な有料版を活用し、リッチなアニメーションを作成できます。
- **Webデザイン管理:** 作成したデザインやコードは再利用できるように整理されています。

## プロジェクト構造

```
project-root/
├── README.md
├── assets/
├── babel.config.js
├── config/
├── docs/
│   ├── WORKFLOW.md
│   ├── daily-memos/
│   │   └── 20240908.md
│   ├── functions/
│   │   └── generate_dynamic_svg_path.md
│   ├── ideas/
│   │   ├── commands.md
│   │   └── plugin.md
│   └── pronpts/
│       ├── addJapaneseJavaScript.md
│       ├── analyzeProgramPrompt.md
│       ├── createFunctionPrompt.md
│       ├── createPronptForChatGPT4o.md
│       └── generateFilesAndCode.md
├── jest.config.js
├── jest.setup.js
├── organize_project.sh
├── package-lock.json
├── package.json
├── src/
│   ├── css/
│   │   └── style.css
│   ├── html/
│   │   └── index.html
│   └── js/
│       ├── gsap-plugins.js
│       ├── main.js
│       └── utils/
│           └── generateSVGPath.js
├── tests/
│   └── unit-tests/
│       ├── example/
│       │   ├── example.test.css
│       │   ├── example.test.html
│       │   └── example.test.js
│       ├── gsapPlugins/
│       │   ├── index.test.html
│       │   ├── script.test.js
│       │   └── styles.test.css
│       └── morphSVG/
│           ├── index.test.html
│           ├── script.test.js
│           └── styles.test.css
└── node_modules/
    └── gsap/
        └── dist/
            ├── CSSRulePlugin.js
            ├── CustomBounce.js
            ├── CustomEase.js
            ├── Draggable.js
            ├── DrawSVGPlugin.js
            ├── EasePack.js
            ├── MorphSVGPlugin.js
            ├── MotionPathHelper.js
            ├── MotionPathPlugin.js
            ├── Observer.js
            ├── Physics2DPlugin.js
            ├── ScrollSmoother.js
            ├── ScrollTrigger.js
            ├── SplitText.js
            ├── TextPlugin.js
            └── gsap.js
        
```

## テスト

このプロジェクトでは、テストフレームワークとして[Jest](https://jestjs.io/)を使用しています。単体テストを行い、機能が意図通りに動作するか確認します。

**テストの実行方法:**

```bash
npm test
```

これにより、定義されたテストが実行され、正確に動作しているかを検証できます。

## ライセンス

このプロジェクトでは以下の有料ツールを使用しています。

- **ChatGPT4.0**（有料版）
- **GitHub Copilot**（有料版）
- **GSAP**（有料版、全プラグインが使用可能）

これらのツールのライセンスや利用規約については、それぞれの公式サイトをご確認ください。

## 貢献

このプロジェクトは個人的な利用を目的としているため、貢献ガイドラインは特に設定していません。
