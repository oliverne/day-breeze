const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WebpackBar = require('webpackbar')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const pkg = require('./package.json')

const IS_DEV = process.env.NODE_ENV !== 'production'
const IS_PROD = !IS_DEV
const OUTPUT_PATH = path.join(__dirname, 'dist')
const SITE_TITLE = pkg.description

function DummyPlugin() {}
DummyPlugin.prototype.apply = function noop(/* compiler */) {}

module.exports = {
  stats: 'errors-only',
  mode: IS_DEV ? 'development' : 'production',
  devtool: IS_DEV ? 'inline-source-map' : 'source-map',
  devServer: {
    port: 5000,
    overlay: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    publicPath: '/'
  },
  entry: {
    bundle: './src/main.tsx'
  },
  output: {
    path: OUTPUT_PATH,
    filename: '[name].[hash:8].js',
    publicPath: './'
  },
  resolve: {
    alias: { '/src': path.resolve(__dirname, 'src/') },
    extensions: ['.wasm', '.mjs', '.js', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
              outputPath: 'images',
              publicPath: './images'
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'css-hot-loader'
          },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './'
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new WebpackBar(),
    IS_PROD
      ? new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: '.bundle-report.html',
          openAnalyzer: false
        })
      : new DummyPlugin(),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    IS_DEV ? new webpack.HotModuleReplacementPlugin() : new DummyPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: SITE_TITLE
    }),
    new MiniCssExtractPlugin({
      filename: IS_DEV ? '[name].css' : '[name].[hash:8].css',
      chunkFilename: IS_DEV ? '[id].css' : '[id].[hash:8].css'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
}
