const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  mode: 'development', //개발용
  devtool: 'eval', //개발용 속도빠름
  resolve: {
    extensions: ['.js', '.vue'], //확장자 관리
  },
  entry: {
    app: path.join(__dirname, 'main.js'),
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader',
    }],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
};