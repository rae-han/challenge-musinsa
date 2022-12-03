프로젝트 구조
Home(DefaaultLayout)
- Filter
  - Options
  - SelectedOption
  - Search
- Menus
DefaultLayout
- Header
- Sections

# 이미지 없을 때
# 스크롤이랑 검색할 때 디바운스, 쓰로틀링
# 글자수 2줄 넘어갈 때 처리
# 특수 문자는 KS X 1001의 특수문자
# 폰트 (가격, 솔드아웃)


```markdown
mkdir front
cd front
npm init
npm i react react-dom
# npm i typescript
# npm i @types/react @types/react-dom

npm i eslint
npm i -D prettier eslint-plugin-prettier eslint-config-prettier

npm i -D webpack @babel/core babel-loader @babel/preset-env @babel/preset-react
# npm i -D @types/webpack @types/node @babel/preset-typescript
npm i style-loader css-loader
```


"scripts": {
"build": "cross-env NODE_ENV=prodection webpack", // NODE_ENV=production npx webpack
"test": "echo \"Error: no test specified\" && exit 1"
},