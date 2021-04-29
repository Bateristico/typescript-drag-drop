const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', 'js'],
  },
  devServer: {
    open: true,
    watchContentBase: true,
    contentBase: '.',
    publicPath: '/dist/',
    hot: false,
    liveReload: true,
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
