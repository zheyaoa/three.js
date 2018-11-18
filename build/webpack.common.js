const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry:{
        main:path.resolve(__dirname,'../src/common/main.js'),
    },
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                include: /src/,
                exclude: /node_modules/, 
                use: ["babel-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                'file-loader'
                ]
            }
        ]
    },
    plugins:[
        new cleanWebpackPlugin(['dist'],{
                root: process.cwd(),
                verbose: true,
                dry: false
        }),
        new HtmlWebpackPlugin({
            title:'Output Management',
            template:path.resolve(__dirname,'../src/template/index.html'),
            filename:'index.html'
        })
    ],
}