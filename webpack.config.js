/**
 * Created by jingweirong on 16/4/6.
 */
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        app: "./src/app.js",
    },
    output: {
        path: __dirname + "/output",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {test: /\.(jpg|png)$/, loader: "url-loader"},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel!react-hot-loader!jsx-loader?harmony!babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new ExtractTextPlugin("[name].css"),
    ]
};