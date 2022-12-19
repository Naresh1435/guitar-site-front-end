const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
 devServer: {
    allowedHosts: ['https://guitar-front-end-h43oo.ondigitalocean.app'],

 },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],

 optimization: {

   runtimeChunk: 'single',

 },
};