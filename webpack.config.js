const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },

  externals: [
    require('webpack-require-http')
  ],

  plugins: [

    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
    }),
  ]
};
