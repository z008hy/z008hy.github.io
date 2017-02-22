/**
 * Created by zhanghaoyi on 16/4/6.
 */
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackUncssPlugin = require('html-webpack-uncss-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: __dirname + "/src/app.js",
        vendor: [
            'react',
            'react-dom',
            'react-router',
            'lodash'
        ]
    },
    output: {
        path: __dirname + "/output",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {test: /\.css$/,loader: ExtractTextPlugin.extract('style-loader','css-loader')},
            {test: /\.less$/,exclude: /node_modules/,loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")},
            {test: /\.(jpg|png)$/,exclude: /node_modules/,loader: "url-loader"},
            {test: /\.(js|jsx)$/,exclude: /node_modules/,loader: "babel"}
        ]
    },
    plugins:[
        //js分块
        new webpack.optimize.CommonsChunkPlugin({
            name:"vendor",
            filename:"vendor.js",//忽略则以name为输出文件的名字，否则以此为输出文件名字
            minChunks: Infinity
        }),
        //有些JS库有自己的依赖树，并且这些库可能有交叉的依赖，删除重复的依赖。
        new webpack.optimize.DedupePlugin(),
        //打包生成css
        new ExtractTextPlugin("[name].css"),
        //去除没有用的css
        new HtmlWebpackUncssPlugin(),
        //自动生成html
        new HtmlWebpackPlugin({
            title: 'BI-qt business intelligent',
            filename:__dirname+'/index.html',
            // 文件名以及文件将要存放的位置
            favicon:'./favicon.ico',
            // favicon路径
            template:'./temple.html',
            // html模板的路径
            inject:true,
            // js插入的位置，true/'head'  false/'body'
            chunks: ['vendor', 'app' ],
            // 指定引入的chunk，根据entry的key配置，不配置就会引入所有页面的资源
            hash:true,
            // 这样每次客户端页面就会根据这个hash来判断页面是否有必要刷新
            minify:{
                // 压缩HTML文件
                removeComments:true,
                // 移除HTML中的注释
                collapseWhitespace:false
                // 删除空白符与换行符
            }
        }),
    ]
};