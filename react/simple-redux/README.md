# Simple application with Redux

Initialize Webpack project:

```
mkdir simple-redux && cd simple-redux && npm i -g @webpack-cli/init && npx webpack-cli init --auto && npm i -D html-webpack-plugin
```

Change npm script:

```
"start": "webpack-dev-server --open"
```

Create Webpack config file (`webpack.config.js`):

```javascript
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [new HTMLWebpackPlugin({template:"index.html"})],
}
```

Remove `<script>...</script>` tag from `index.html`

Run Webpack Dev server:

```bash
npm start
```

Install Redux:

```bash
npm i redux
```

## Implement logic with Redux

Import `createStore` function from `react-redux`.

Create reducer.

Create store with `createStore` function, pass reducer as parameter.

Throw **action** (can be created with object literal or action creator) to **store** with `store.dispatch(action)` method. Action will be processed by reducer.