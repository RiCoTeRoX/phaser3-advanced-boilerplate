import Webpack from 'webpack';
import WebpackConfig from 'webpack-config';

export default new WebpackConfig().extend('./webpack/webpack.base.config.js').merge({
  bail: true,
  devtool: 'source-map',

  entry: ['./src/index.js'],

  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new Webpack.optimize.UglifyJsPlugin()
  ]
});
