var webpack   = require('webpack'),
    path      = require('path'),
    proxy     = require('http-proxy-middleware')

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

module.exports = {
  devtool: 'source-map',
  entry: './app/boot.ts',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],
  resolve: {
    extensions: ['.ts', '.js', '.html']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  devServer: {
    port: 8080,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test:  /\.js$/,
        loader: 'source-map-loader',
        exclude: /(node_modules)/
      },
      { test: /\.ts$/, loader: 'angular2-template-loader', exclude: [ /\.(spec|e2e)\.ts$/ ] },
      { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [ /\.(spec|e2e)\.ts$/ ] },
      { test: /\.(html|css)$/, loader: 'raw-loader' }
    ]
  },
};
