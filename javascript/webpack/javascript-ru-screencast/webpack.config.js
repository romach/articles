'use strict';
const path = require('path');
const CssUrlRelativePlugin = require('css-url-relative-plugin')

module.exports = {
    mode: "development", // can be "production" | "development" | "none"
    entry: "./src/home.js", // start module, which Webpack start process
    output: {
        path: path.resolve(__dirname, 'dist'), // directory for output files
        filename: "main.js", // compiled js file
        library: "main", // assign module to variable 'home'
        publicPath: 'dist/'
    },
    // watch: NODE_ENV === 'development', // auto-build after changes in 'dev' profile
    // watchOptions: {
    //     aggregateTimeout: 300 // timeout after file save before compilation
    // },
    // todo: delete source map if not need
    devtool:  "source-map", // source map for debugging in 'development' profile

    module: { // babel
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // todo: minimize css
            // todo: post css
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // todo: https://github.com/tcoopman/image-webpack-loader
            // todo: https://webpack.js.org/loaders/url-loader/
            {
                test: /\.(png|svg|jpg|gif)$/,
                // loader: 'file-loader?emitFile=false&name=[path][name].[ext]'
                loader: 'file-loader'
            }
        ]
    },
    resolve: { // where to find modules
        extensions: ['.js'],
        modules: ['node_modules']
    },
    resolveLoader: { // where to find loaders
        extensions: ['.js'],
        modules: ['node_modules'],
        moduleExtensions: [ '-loader' ]
    },
    plugins: [
        new CssUrlRelativePlugin(/* options */)
    ]
    // ,
    // optimization: {
    //     minimizer: [new UglifyJsPlugin()]
    // }
};

// if (NODE_ENV === 'prod') {
//     module.exports.
// }