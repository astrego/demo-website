const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry:'./src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
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
                    loader: 'style-loader'
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