const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname, "src", "app.js"),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.s?css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: 'postcss.config.js'
                        }
                    }
                },
                {
                    loader: 'sass-loader'
                },
            ]
        }, {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
            {
                loader: 'file-loader',
                options: {}
            }
        ]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "src", "index.html"),
            favicon: "src/images/favicon.png"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}