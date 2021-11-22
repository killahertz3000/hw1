const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./dateDiff/js/main.js",
    output: {
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.mp3$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'dateDiff/index.html',
        })
    ]
}