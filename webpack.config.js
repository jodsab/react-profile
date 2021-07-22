const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: ""
    },
    mode: "development",
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackplugin({
            template: "./public/index.html"
        })
    ]
}