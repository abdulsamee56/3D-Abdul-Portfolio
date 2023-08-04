set -e

npm run build 

cd dist

echo > .nojekyll

get init 
git checkout -B main

git add -A

git commit -m 'deploy'

#git push -f git@github.com:abdulsamee56/3D-Abdul-Portfolio.git main:gh-pages
cd -