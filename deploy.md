# 确保脚本抛出遇到的错误

set -e

# 生成静态文件111

npm run build

# 进入生成的文件夹

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io 填写你刚刚创建的仓库地址

git push -f git@github.com:66njk/66njk.github.io.git master:gh-pages
cd -
