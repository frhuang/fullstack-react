var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: {
        app: "app/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: /assets/,
        filename:'[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.(png|jpg)$/,
                loader: "url-loader?limit=8192"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}