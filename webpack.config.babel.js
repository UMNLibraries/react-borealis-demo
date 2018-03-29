const path = require('path');
// import { resolve } from 'path';

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', ['es2015', { modules: false }], 'stage-0'],
          },
        },
      },
    ]
  },
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-borealis-demo.js',
    publicPath: path.join(__dirname, "dist")
  },
  devServer: {
    contentBase: './dist',
    port: 9000
  },
};
