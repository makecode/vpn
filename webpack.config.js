const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const js = require('./webpack/js');
const pug = require('./webpack/pug');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');

const PATH = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'build')
};

const common = merge([
  {
    entry: {
      'index': PATH.source + '/index.js'
    },

    output: {
      path: PATH.build,
      filename: 'js/[name].js'
    },

    resolve: {
      alias: {
        media: path.resolve(__dirname, 'source/media'),
      }
    },

    plugins: [
      // new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index', 'common'],
        template: PATH.source + '/pages/index/index.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'start.html',
        chunks: ['index', 'common'],
        template: PATH.source + '/pages/start/start.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'connecting.html',
        chunks: ['index', 'common'],
        template: PATH.source + '/pages/connecting/connecting.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'connected.html',
        chunks: ['index', 'common'],
        template: PATH.source + '/pages/connected/connected.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'disconnect.html',
        chunks: ['index', 'common'],
        template: PATH.source + '/pages/disconnect/disconnect.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'waiting.html',
        chunks: ['index', 'common'],
        template: PATH.source + '/pages/waiting/waiting.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'sign.html',
        chunks: ['index', 'common'],
        template: PATH.source + '/pages/sign/sign.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'signup.html',
        chunks: ['index', 'common'],
        template: PATH.source + '/pages/signup/signup.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'about.html',
        chunks: ['index', 'common'],
        template: PATH.source + '/pages/about/about.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'plans.html',
        chunks: ['index', 'common'],
        template: PATH.source + '/pages/plans/plans.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'plans2.0.html',
        chunks: ['index', 'common'],
        template: PATH.source + '/pages/plans2.0/plans2.0.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'menu.html',
        chunks: ['index', 'common'],
        template: PATH.source + '/pages/menu/menu.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'free.html',
        chunks: ['index', 'common'],
        template: PATH.source + '/pages/free/free.pug'
      }),
      // new CopyWebpackPlugin([{
        // from: './locales/**/*',
        // to: './js/'
      // }]),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    ]
  },
  js(),
  pug(),
  images(),
  fonts()
]);

module.exports = function (env) {
  if (env === 'development') {
    return merge([
      common,
      devserver(),
      sass(),
      css()
    ]);
  }
  if (env === 'production') {
    return merge([
      common,
      extractCSS(),
      uglifyJS()
    ]);
  }
};
