// LEES: https://stackoverflow.com/questions/55678211/using-mini-css-extract-plugin-and-style-loader-together

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    devtool: 'source-map',
    entry:'./src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
          ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
      ],
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
                    loader: MiniCssExtractPlugin.loader,
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader'
                },
                {
                    loader: 'postcss-loader'
                }   
            ]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}