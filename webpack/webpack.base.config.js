import { resolve } from 'path';
import Webpack from 'webpack';
import WebpackConfig from 'webpack-config';
import StringReplacePlugin from 'string-replace-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import config from '../configs';

export default new WebpackConfig().merge({
  output: {
    sourceMapFilename: '[file].map',
    filename: '[name].js?[hash]',
    path: resolve('./', 'dist'),
    chunkFilename: '[name].js?[hash]',
    publicPath: ''
  },

  module: {
    rules: [
      {
        test: /\.(js)$/i,
        loader: StringReplacePlugin.replace({
          replacements: [
            {
              pattern: /__(\w*?)__/gi,
              replacement: (match, p1) => config[p1]
            }
          ]
        }),
        include: resolve('src/configs')
      },
      {
        test: /\.(eot|ttf|svg|woff|otf|woff2)$/i,
        include: resolve('./', 'src/assets/fonts'),
        exclude: /node_modules/,
        loader: 'file-loader?name=[path][name].[ext]&limit=1000'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: [/node_modules/, resolve('src/fonts')],
        loader: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.(mp3|ogg)$/,
        loader: 'file-loader?name=[path][name].[ext]',
        exclude: /node_modules/
      },

      {
        test: [/\.vert$/, /\.frag$/],
        use: [
          {
            loader: 'raw-loader'
          }
        ]
      },
      {
        test: /\.(js)$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['es2015', { modules: false }], 'stage-2', 'env'],
              plugins: [
                'transform-class-properties',
                'transform-object-assign',
                'transform-flow-strip-types',
                'syntax-dynamic-import'
              ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new Webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    }),
    new Webpack.NamedModulesPlugin(),
    new StringReplacePlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      env: process.env.NODE_ENV,
      version: config.version,
      title: config.title,
      template: resolve('html/index.ejs'),
      inject: true
    })
  ]
});
