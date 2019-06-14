const pth = require('path');
const SRC_DIR = pth.join(__dirname, "/client");
const DIST_DIR = pth.join(__dirname, "/public");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');



module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'main.[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|css)$/,
        exclude: [/node_modules/],
        include: SRC_DIR,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css']
  },
  plugins: [
    //new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin({
      dry: true,
      cleanOnceBeforeBuildPatterns: ['**/*', '!static-files*'],
    }),
    new HTMLWebpackPlugin({
          hash: true,
          filename: "index.html",
          template: "public/index-template.html", //where you want the sample template to be


        })
  ]
  // optimization: {
  //     splitChunks: {
  //       chunks: 'intial',
  //       maxSize: 30000,
  //       cacheGroups: {
  //         vendors: {
  //           test: /[\\/]node_modules[\\/]/,
  //           priority: 1
  //         },
  //     }
  //   }
  // }
};


