#!/usr/bin/env sh

# 發生錯誤時執行終止指令
set -e

# 打包編譯
yarn build

# 移動到打包資料夾下
cd dist

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/hazukiliou/Portfolio-With-Vue.git master:gh-pages

cd -