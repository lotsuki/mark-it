const pth = require('path');
const SRC_DIR = pth.join(__dirname, "/client");
const DIST_DIR = pth.join(__dirname, "/public");




module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        include: SRC_DIR,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
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


