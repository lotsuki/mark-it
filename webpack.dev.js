const pth = require('path');
const SRC_DIR = pth.join(__dirname, "/client");
const DIST_DIR = pth.join(__dirname, "/public");

module.exports = {
  mode: "development",
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css']
  }
};