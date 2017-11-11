const path = require('path');
const webpack = require('webpack');
var CompressionPlugin = require("compression-webpack-plugin");


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
//    'webpack-hot-middleware/client',
    'babel-polyfill',
    path.join(__dirname, '../../app/web/index'),
  ],
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      // take all less files, compile them, and bundle them in with our js bundle
      {
        test: /\.json$/,
        loader: "json",
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: [['react-transform', {
            transforms: [{
              transform: 'react-transform-hmr',
              imports: ['react'],
              // this is important for Webpack HMR:
              locals: ['module']
            }],
          }]],
        },
      },
    ],
  },
  devServer: {
      historyApiFallback: true,
      compress: true,
      disableHostCheck:true,
    },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: JSON.stringify('development'),
  //       PLATFORM_ENV: JSON.stringify('web'),
  //     },
  //   }),
  //   new webpack.optimize.OccurenceOrderPlugin(),
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NoErrorsPlugin(),
  // ]
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new webpack.NoErrorsPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    })
  ]
};
