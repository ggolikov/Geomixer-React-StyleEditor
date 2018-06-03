import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import merge from 'webpack-merge';
import path from 'path';
import paths from './config';

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(paths.src, 'index.html'),
    name: 'index.html',
    inject: 'body'
});

const common = {
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.sass', 'scss'], //An empty string is no longer required.
        modules: [
            'node_modules'
        ]
    },
    devtool: "cheap-inline-module-source-map",
    module: {
        rules: [{
                    test: /\.jsx?$/,
                    use: [{
                        loader: "babel-loader"
                    }],
                    exclude: /node_modules/
                }, {
                    test: /\.(css)$/i,
                    use: ExtractTextPlugin.extract({
                      fallback: "style-loader",
                      use: "css-loader"
                    }),
                    exclude: /node_modules/
                },  {
                    test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$/,
                    use: [{
                        loader: "file-loader?name=./icons/[name].[ext]"
                    }],
                    exclude: /node_modules/
                }
        ]
    },
};

module.exports = (env) => {
    if (env.plugin) {
        console.log('build plugin');
            return merge({
                entry: [
                    __dirname + '/plugin.js'
                ],
                devtool: "cheap-inline-module-source-map",
                output: {
                    path: paths.dist,
                    filename: 'styleEditorPlugin.js'
                },
                plugins: [
                    HTMLWebpackPluginConfig,
                    new ExtractTextPlugin('./css/gmx.css'),
                    new CopyWebpackPlugin([
                        { from: path.join(paths.src, 'css'), to: path.join(paths.dist, 'css') }
                    ])
                ]
        }, common);
    } else {
        console.log('build demo');
        return merge({
            entry: [
                __dirname + '/index.js'
            ],
            devtool: "cheap-inline-module-source-map",
            output: {
                path: paths.public,
                filename: 'bundle.js'
            },
            plugins: [
                HTMLWebpackPluginConfig,
                new ExtractTextPlugin('./css/gmx.css'),
                new CopyWebpackPlugin([
                    { from: path.join(paths.src, 'css'), to: path.join(paths.public, 'css') }
                ])
            ]
        }, common);
    }
}
