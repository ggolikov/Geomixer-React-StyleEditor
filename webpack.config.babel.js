import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import paths from './config';
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(paths.src, 'index.html'),
    name: 'index.html',
    inject: 'body'
});

export default {
    entry: [
        __dirname + '/index.js'
    ],
    devtool: "cheap-inline-module-source-map",
    devServer: {
        historyApiFallback: true,
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, exclude: /node_modules/, loader: "file-loader?name=[name].[ext]" }
        ]
    },
    output: {
        path: paths.public,
        filename: 'bundle.js'
    },
    plugins: [
        HTMLWebpackPluginConfig,
        new CopyWebpackPlugin([
            { from: path.join(paths.src, 'css/main.css'), to: path.join(paths.public, 'css/main.css') }
        ])
    ]
}
