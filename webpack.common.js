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
        exclude: [/node_modules/, /__tests__/, /__mocks__/, /coverage/],
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
    // new CleanWebpackPlugin({
    //   dry: true,
    //   // cleanStaleWebpackAssets: false,
    //   cleanAfterEveryBuildPatterns: [`!index.template.html`, `!index.html`, `!style.css`, `!symbol-defs.svg`],
    // }),
    // new HTMLWebpackPlugin({
    //   filename: "index.html",
    //   template: "public/index-template.html",
    // })
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

