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