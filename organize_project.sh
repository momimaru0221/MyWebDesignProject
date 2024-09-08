#!/bin/bash

# 作業ディレクトリを確認
cd "$(dirname "$0")"

# プロジェクト構造の整理

# コンポーネントフォルダを統一
echo "Renaming {components} to shared_components in css and html directories..."
mv src/css/\{components\} src/css/shared_components
mv src/html/\{components\} src/html/shared_components

# pathGeneratorTest.* ファイルを tests/demo に移動
echo "Creating tests/demo directory..."
mkdir -p tests/demo

echo "Moving pathGeneratorTest files to tests/demo..."
mv src/css/pathGeneratorTest.css tests/demo/
mv src/html/pathGeneratorTest.html tests/demo/
mv src/js/pathGeneratorTest.js tests/demo/

# Gitの自動更新処理

# 最新の変更を取得
echo "Pulling the latest changes from the repository..."
git pull origin main

# 全ての変更をステージング
echo "Staging all changes..."
git add .

# 自動コミット
echo "Committing changes..."
git commit -m "Auto commit after organizing project"

# リモートにプッシュ
echo "Pushing to the remote repository..."
git push origin main

# 終了メッセージ
echo "Project structure organized and changes pushed to GitHub successfully."