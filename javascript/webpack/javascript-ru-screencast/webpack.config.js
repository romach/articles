'use strict';
const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'dev';
const webpack = require('webpack');

module.exports = {
    mode: "none", // can be "production" | "development" | "none"
    entry: "./home", // start module, which Webpack start process
    output: {
        path: path.resolve(__dirname), // directory for output files
        filename: "build.js", // compiled js file
        library: "home" // assign module to variable 'home'
    },
    watch: NODE_ENV === 'dev', // auto-build after changes in 'dev' profile
    watchOptions: {
        aggregateTimeout: 300 // timeout after file save before compilation
    },
    // todo: delete source map if not need
    devtool:  NODE_ENV === 'dev' ? "source-map" : false, // source map for debugging in 'dev' profile

    plugins: [
        new webpack.DefinePlugin({ // access environment variables in scripts
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ]
};