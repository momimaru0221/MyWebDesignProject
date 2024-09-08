#!/bin/bash

# 作業ディレクトリを確認
cd "$(dirname "$0")"

# コンポーネントフォルダを統一
# {components} フォルダを 'shared_components' にリネーム
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

# 終了メッセージ
echo "Project structure organized successfully."