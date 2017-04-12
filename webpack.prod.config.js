// var webpack           = require('webpack'),
//     path              = require('path'),
//     proxy             = require('http-proxy-middleware');
//
// function root(args) {
//   args = Array.prototype.slice.call(arguments, 0);
//   return path.join.apply(path, [__dirname].concat(args));
// }
//
// const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
//
//
// module.exports = {
//   devtool: 'source-map',
//   debug: true,
//   entry: './app/boot.ts',
//   resolve: {
//     extensions: ['', '.ts', '.js', '.html']
//   },
//   output: {
//     path: './build',
//     filename: 'bundle.js'
//   },
//
//   module: {
//     preLoaders: [
//       { test: /\.js$/, loader: 'source-map-loader', exclude: [ root('node_modules/rxjs'), root('node_modules/ng2-facebook-sdk') ] }
//     ],
//     loaders: [
//       { test: /\.ts$/, loader: 'angular2-template-loader', exclude: [ /\.(spec|e2e)\.ts$/ ] },
//       { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [ /\.(spec|e2e)\.ts$/ ] },
//       { test: /\.(html|css)$/, loader: 'raw-loader' }
//     ]
//   },
//   plugins: [
//   new webpack.optimize.UglifyJsPlugin(),
// ],
//
// };
