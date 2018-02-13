import WebpackConfig from 'webpack-config';
import Webpack from 'webpack';
import appConfig from '../configs';

export default new WebpackConfig().extend('./webpack/webpack.base.config.js').merge({
  entry: {
    index: ['./src/index.js'],
    server: `webpack-dev-server/client/index.js?${appConfig.clientProtocol}://${
      appConfig.clientDomain
    }:${appConfig.clientPort}`,
    dev: 'webpack/hot/dev-server'
  },

  // entry: './src/index.ts',

  devtool: 'source-map',

  plugins: [
    new Webpack.LoaderOptionsPlugin({
      debug: true,
      minimize: true
    }),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoEmitOnErrorsPlugin()
  ]
});
