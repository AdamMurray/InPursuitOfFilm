npm run build
rm index.html
rm manifest.json
rm -rf static
cp build/index.html ./
cp -r build/static ./
cp build/manifest.json ./