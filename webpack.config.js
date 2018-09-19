const path = require('path');
const webpack = require('webpack');

const HTMLPlugin = require('html-webpack-plugin');

const resolve = (relativePath) => (
    path.resolve(__dirname, relativePath)
);

module.exports = {
    mode: 'development',
    entry: {
        main: ['webpack-hot-middleware/client?reload=true', resolve('src/index.js')],
    },
    output: {
        path: resolve('dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ]
            }
        ],
    },
    plugins: [
        new HTMLPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
};