const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  // devtool: "source-map",
  // optimization: {
  //   nodeEnv: 'production',
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       cache: true,
  //       parallel: true,
  //       sourceMap: true,
  //       terserOptions: {
  //         compress: {
  //           drop_console: true
  //         },
  //         output: {
  //           comments: false,
  //         },
  //       }
  //     })
  //   ]
  // },
});

