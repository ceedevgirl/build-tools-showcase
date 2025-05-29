const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/index.ts',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // clean output folder before emit
  },

  devtool: 'inline-source-map', // helpful for debugging

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    hot: true,
    open: true, // auto open browser
    port: 3000, // you can change the port
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',   // inject styles into DOM
          'css-loader',     // translates CSS into CommonJS
          'sass-loader',    // compiles Sass to CSS
        ],
      },
      {
        test: /\.json$/,
        type: 'json',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  optimization: {
    splitChunks: false, // disable code splitting to keep single bundle.js
  },
};
