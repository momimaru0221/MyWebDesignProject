# プロジェクト開始手順

プロジェクトディレクトリ: `/Users/momimaru/00_personal/00_programming/01_WebDesign/project-root`

## プロジェクトの準備をする

まず、以下の手順に従って作業環境を準備します。

### 1. プロジェクトを整理する
ターミナルを開き、プロジェクトのルートディレクトリに移動した後、以下のコマンドを実行します：

```bash
cd /Users/momimaru/00_personal/00_programming/01_WebDesign/project-root
./organize_project.sh
```

これにより、必要なファイルやフォルダが整理されます。

### 2. 依存関係をインストールする
次に、必要な依存関係が正しくインストールされているか確認します。以下のコマンドを実行してください：

```bash
npm install
```

### 3. 開発サーバーを起動する
プロジェクトが整理された後、開発サーバーを起動します。以下のコマンドを実行してください：

```bash
npm start
```

ブラウザで `http://localhost:3000` を開き、Webページを確認できます。