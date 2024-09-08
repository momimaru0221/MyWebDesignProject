#!/bin/bash

# 作業ディレクトリを確認
cd "$(dirname "$0")"

# プロジェクト構造の整理

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