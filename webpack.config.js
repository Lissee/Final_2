const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
entry: './src/index.js',
output: {
path: path.resolve(__dirname, 'dist'),
filename: 'bundle.js'
},
plugins: [
new CleanWebpackPlugin(),
new CopyPlugin({
patterns: [{ from: 'src/index.html' }],
}),
new HtmlWebpackPlugin({
templateContent: ({ htmlWebpackPlugin }) => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
filename: 'index.html',
})
],
module: {
rules: [
{
test: /\.css$/,
use: [
'style-loader',
'css-loader'
]
},
{
test: /\.png$/,
use: [
{
loader: 'url-loader',
options: {
mimetype: 'image/png'
}
}
]
}
]
}
};

module.exports = config;
