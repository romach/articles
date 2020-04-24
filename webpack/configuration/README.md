In this example we will configure project build with Webpack.

Initial directory structure:

```
└── src
    ├── img
    │   ├── cat-1.png
    │   └── cat-2.jpg
    ├── index.html
    ├── js
    │   ├── alert.js
    │   └── index.js
    └── sass
        ├── common.scss
        └── image.scss
```

We need to build our project to `dist` directory:

```
└── dist
    ├── img
    │   ├── cat-1.png
    │   └── cat-2.jpg
    ├── index.html
    ├── js
    │   └── app.js
    └── css
        └── styles.css
└── src
    ├── img
    │   ├── cat-1.png
    │   └── cat-2.jpg
    ├── index.html
    ├── js
    │   ├── alert.js
    │   └── index.js
    └── sass
        ├── common.scss
        └── image.scss
```

- images should be compressed;

- script files should be transformed to single file (use ES 5 syntax);

- sass files should be converted to single css file;

## Install Webpack

Install packages:

```bash
npm install webpack webpack-cli --save-dev
```

## Add `webpack.config.js`

First of all we need to add `module.exports` to config file (Webpack is running by Node.js, so we need to use CommpnJS modules).

```javascript
module.exports = {};
```

Add entry point (JS file) for Webpack:

```javascript
module.exports = {
  entry: "./src/js/index.js"
};
```

Next, we need to configure output file: set name and absolute path:

```javascript
module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  }
};
```

## Run Webpack build

To run build we can execute `webpack` command:

```javascript
npx webpack
```

As a result we get `/dist/app.js` file.

## Make development build

If we need development build, we need to add `mode: "development"` field to `module.exports`.

## Copy HTML file

To copy HTML file to result bundle we need to use `html-webpack-plugin`.

First of all, let's install it:

```bash
npm i html-webpack-plugin -D
```

Then, add it to config:

```diff
const path = require("path");
+ const HTMLWebpackPlugin = requere("html-webpack-plugin");

module.exports = {
  ...
+ plugins: [new HTMLWebpackPlugin({template: "src/index.html"})]
};
```

This plugin copies our `index.html` to `dist` directory and adds `<script>` tag with link to `app.js` to the end of HTML file.

## Clean `dist` directory before build

To clean `dist` directory before build we need to install `clean-webpack-plugin`:

```bash
npm i clean-webpack-plugin -D
```

Then, add it to config:

```diff
+ const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  ...
  plugins: [
    new HTMLWebpackPlugin({template: "src/index.html"}),
+   new CleanWebpackPlugin()
  ]
};
```

## Add Webpack scripts

To run Webpack with NPM we can add scripts to `package.json`:

```javascript
"scripts": {
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
}
```

If we run `npm run dev`, we will get not minified JavaScript bundle.

If we run `npm run build`, will get minified JavaScript bundle.

## Context

We can set build context, so we don't need webpack `/src` prefix in `entry` property:

```diff
module.exports = {
+ context: path.resolve(__dirname, "src"),
  mode: "production",
- entry: "./src/js/index.js",
+ entry: "./js/index.js",
  ...
- new HTMLWebpackPlugin({template: "src/index.html"}),
+ new HTMLWebpackPlugin({template: "index.html"}),
  ...
};
```

## Convert SASS to CSS

```bash
npm i sass-loader node-sass css-loader mini-css-extract-plugin
```

Import styles in js

```javascript
import "../sass/styles.scss"
```

```diff
+ const MiniCssExtractPlugin = require('mini-css-extract-plugin');
plugins: [
  ...
+ new MiniCssExtractPlugin({
+   filename: 'css/styles.css',
+ })
],
module: {
  rules: [
    ...
+   {
+     test: /\.s[ac]ss$/,
+     use: [
+       { loader: MiniCssExtractPlugin.loader },
+       "css-loader",
+       "sass-loader"
+     ]
+   }
+ ]
}
```

## Copy images with compression

```bash
npm i -D file-loader imagemin img-loader imagemin-gifsicle imagemin-pngquant imagemin-svgo imagemin-mozjpeg
```

```diff
+ const imageminGifsicle = require("imagemin-gifsicle");
+ const imageminPngquant = require("imagemin-pngquant");
+ const imageminSvgo = require("imagemin-svgo");
+ const imageminMozjpeg = require("imagemin-mozjpeg");

module.exports = {
  ...
+ module: {
+   rules: [
+     {
+       test: /\.(jpe?g|png|gif|svg)$/i,
+       loaders: [
+         {
+           loader: "file-loader",
+           options: {
+             name: "./img/[name].[ext]"
+           }
+         },
+         {
+           loader: "img-loader",
+           options: {
+             plugins: [
+               imageminGifsicle({
+                 interlaced: false
+               }),
+               imageminMozjpeg({
+                 progressive: true,
+                 arithmetic: false
+               }),
+               imageminPngquant({
+                 floyd: 0.5,
+                 speed: 2
+               }),
+               imageminSvgo({
+                 plugins: [{ removeTitle: true }, { convertPathData: false }]
+               })
+             ]
+           }
+         }
+       ]
+     }
+   ]
+ }
```

## Add Babel

Install dependency:

```bash
npm install --save-dev babel-loader @babel/core
```

Install preset:

```
npm install --save-dev @babel/preset-env
```

Add loader to config:

```
{
  test: /\.js$/,
  exclude: /node_modules/,
  loader: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"]
    }
  }
}
```

Add `"browserslist": "> 0.25%, not dead",` to `package.json`

## Add `eslint`

Install dependencies:

```bash
npm i -D eslint eslint-loader babel-eslint
```

Add loader
```diff
+const createJSLoaders = () => {
+  const loaders = [
+    {
+      loader: "babel-loader",
+      options: {
+        presets: ["@babel/preset-env"]
+      }
+    }
+  ]
+  if (!isProd) {
+    loaders.push("eslint-loader");
+  }
+  return loaders;
+}
...
+{
+  test: /\.js$/,
+  exclude: /node_modules/,
+  use: createJSLoaders()
+},
```

Add `.eslintrc` to root directory

```
{
  "parser": "babel-eslint",
  "rules": {
    "no-unused-vars": "warn"
  },
  "env": {
    "es6": true,
    "browser": true,
    "commonjs": true,
    "node":true
  },
  "extends": "eslint:recommended"
}
```