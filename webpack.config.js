var path = require('path'); //no need to install path, it's already part of Node

module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"), //generates an absolute path, needed by webpack
        filename: "App.js"
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            test: /\.js$/, //apply it just to js files
            exclude: /node_modules/ //exclude libraries, just apply webpack to my own code
        }]
    }
};