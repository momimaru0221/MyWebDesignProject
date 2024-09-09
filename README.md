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
├── README.md               # プロジェクトの概要やセットアップ手順が記載されたファイル
├── assets/                 # プロジェクトで使用する画像やフォント、その他メディアファイルを格納
├── babel.config.js         # Babelの設定ファイル。JavaScriptのコンパイルに関する設定
├── config/                 # プロジェクトの各種設定ファイルを格納
├── docs/                   # プロジェクトに関連するドキュメントを保存するフォルダ
│   ├── WORKFLOW.md             # ワークフローに関する説明が記載されたドキュメント
│   ├── daily-memos/            # 日々のメモや進捗に関するドキュメントを保存
│   │   └── 20240908.md             # 2024年9月8日のメモ
│   ├── functions/             # 関数や機能の仕様や実装に関するドキュメント
│   │   └── generate_dynamic_svg_path.md  # 動的なSVGパスを生成する関数に関するドキュメント
│   ├── ideas/                 # アイデアや設計に関するドキュメントを保存
│   │   ├── commands.md            # コマンドに関するアイデアや設計
│   │   └── plugin.md              # プラグインに関するアイデアや設計
│   └── prompts/               # ChatGPT用のプロンプトを保存
│       ├── addJapaneseJavaScript.md    # 日本語を含むJavaScript関連のプロンプト
│       ├── analyzeProgramPrompt.md     # プログラムを分析するプロンプト
│       ├── createFunctionPrompt.md     # 関数作成のプロンプト
│       ├── createPromptForChatGPT4.md  # ChatGPT 4.0用プロンプト
│       └── generateFilesAndCode.md     # ファイルやコードを生成するためのプロンプト
├── jest.config.js           # Jestの設定ファイル。ユニットテストに関する設定
├── jest.setup.js            # Jestのセットアップファイル
├── organize_project.sh      # プロジェクトのフォルダやファイルを整理するためのシェルスクリプト
├── package-lock.json        # npmの依存関係を記録するファイル
├── package.json             # npmの依存関係とスクリプトを定義するファイル
├── src/                     # ソースコードを保存するフォルダ
│   ├── css/                     # CSSファイルを格納
│   │   └── style.css                # プロジェクトのスタイルシート
│   ├── html/                    # HTMLファイルを格納
│   │   └── index.html               # プロジェクトのメインHTMLファイル
│   └── js/                      # JavaScriptファイルを格納
│       ├── gsap-plugins.js          # GSAPプラグインに関するJavaScriptファイル
│       ├── main.js                  # メインのJavaScriptファイル
│       └── utils/                   # ユーティリティ関数を格納
│           └── generateSVGPath.js       # SVGパスを生成する関数
├── tests/                   # テストに関するファイルを保存するフォルダ
│   └── unit-tests/              # ユニットテストファイルを格納
│       ├── example/                # テストの例
│       │   ├── example.test.css        # CSSファイルのテスト
│       │   ├── example.test.html       # HTMLファイルのテスト
│       │   └── example.test.js         # JavaScriptファイルのテスト
│       ├── gsapPlugins/            # GSAPプラグインに関するテストファイルを保存
│       │   ├── index.test.html         # GSAPプラグインのHTMLテスト
│       │   ├── script.test.js          # GSAPプラグインのJavaScriptテスト
│       │   └── styles.test.css         # GSAPプラグインのCSSテスト
│       └── morphSVG/               # MorphSVGプラグインに関するテストファイルを保存
│           ├── index.test.html         # MorphSVGのHTMLテスト
│           ├── script.test.js          # MorphSVGのJavaScriptテスト
│           └── styles.test.css         # MorphSVGのCSSテスト
└── node_modules/             # npmでインストールされた依存パッケージを格納
    └── gsap/                 # GSAP関連のファイルを保存
        └── dist/                 # GSAPプラグインのディストリビュートファイル
            ├── CSSRulePlugin.js      # CSSルールプラグイン
            ├── CustomBounce.js       # カスタムバウンスアニメーションプラグイン
            ├── CustomEase.js         # カスタムイージングプラグイン
            ├── Draggable.js          # ドラッグ可能な要素を作成するプラグイン
            ├── DrawSVGPlugin.js      # SVG描画アニメーションプラグイン
            ├── EasePack.js           # イージング効果をまとめたプラグインパック
            ├── MorphSVGPlugin.js     # SVGパスの変形アニメーションプラグイン
            ├── MotionPathHelper.js   # モーションパスの補助ツール
            ├── MotionPathPlugin.js   # オブジェクトをパスに沿って移動させるプラグイン
            ├── Observer.js           # ユーザーインタラクションを監視するプラグイン
            ├── Physics2DPlugin.js    # 2D物理エンジンを使用したアニメーションプラグイン
            ├── ScrollSmoother.js     # スムーズなスクロール効果を実現するプラグイン
            ├── ScrollTrigger.js      # スクロール位置に基づいたアニメーションを制御するプラグイン
            ├── SplitText.js          # テキストを分割し、各文字ごとにアニメーションを付けるプラグイン
            ├── TextPlugin.js         # テキストにアニメーションを付けるためのプラグイン
            └── gsap.js               # GSAPのメインライブラリ        
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
