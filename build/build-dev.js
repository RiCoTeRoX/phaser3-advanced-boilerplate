import { resolve } from 'path';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config from '../webpack.config';
import appConfig from '../configs';

new WebpackDevServer(webpack(config), {
  quiet: false,
  noInfo: false,
  compress: true,
  hot: false,
  https: appConfig.clientProtocol.includes('s'),
  contentBase: resolve('./', 'dist'),
  publicPath: '/',
  historyApiFallback: true,
  stats: {
    assets: true,
    assetsSort: 'field',
    cached: true,
    cachedAssets: false,
    children: true,
    chunks: true,
    chunkModules: false,
    chunkOrigins: true,
    colors: true,
    depth: false,
    entrypoints: true,
    errors: true,
    errorDetails: true,
    hash: true,
    modules: false,
    moduleTrace: true,
    performance: true,
    reasons: true,
    source: false,
    timings: true,
    usedExports: false,
    version: true,
    warnings: true
  }
}).listen(appConfig.clientPort, appConfig.clientDomain, error => {
  if (error) {
    console.log(error);
  } else {
    console.log(
      `Listening at ${appConfig.clientProtocol}://${appConfig.clientDomain}:${
        appConfig.clientPort
      }/`
    );
  }
});
