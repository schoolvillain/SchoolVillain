const path=require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack=require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        port:8000,
        historyApiFallback: true,
        hot:true,
        open:true,
        inline:true
    },
});