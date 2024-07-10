const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development', // Hata ayıklamak için 'development' modunu kullanın.
  devtool: 'source-map', // Detaylı hata ayıklama bilgileri sağlar.
  entry: './newtab/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'newtab/components'),
      styles: path.resolve(__dirname, 'newtab/public/styles'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './newtab/public/index.html',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'newtab/public/manifest.json', to: 'manifest.json' },
        { from: 'newtab/public/_locales', to: '_locales' },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/styles.css',
    }),
    new OptimizeCSSAssetsPlugin({}),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
