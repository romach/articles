const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [new HTMLWebpackPlugin({template:"index.html"})],
}