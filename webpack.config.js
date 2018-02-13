import WebpackConfig from 'webpack-config';

export default new WebpackConfig().extend('./webpack/webpack.[NODE_ENV].config.js');
