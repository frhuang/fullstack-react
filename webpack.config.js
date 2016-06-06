var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge')

const TARGET = process.env.npm_lifecycle_event
const PATH = {
  app: path.join(__dirname, './app'),
  build: path.join(__dirname, './build')
}

process.env.BABEL_ENV = TARGET

const common = {
  entry: [
    "./app/index"
  ],
  output: {
      path: PATH.build,
      filename: 'bundle.js'
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel',
              exclude: /node_modules/
          },
          {
              test: /.scss$/,
              loaders: ['style', 'css', 'sass']
          },
          {
              test: /\.(png|jpg|gif|jpeg)$/,
              loader: 'url-loader?limit=8192'
          }
      ]
  }
}

console.log('.....'+TARGET);

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'cheap-module-eval-source-map',
    entry: ['webpack-hot-middleware/client', './app/index.js'],
    output: {
		    publicPath: '/build/'
	  },
    plugins: [
  		new webpack.DefinePlugin({
  	      'process.env': {
  	        NODE_ENV: '"development"',
  	      },
  	      __DEVELOPMENT__: true,
  	    }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  })
}else if(TARGET === 'build'){
  module.exports = merge(common, {
    devtool: 'source-map',
    output: {
  		publicPath: 'build/'
  	},
  	plugins: [
  		new webpack.DefinePlugin({
  			'precess.env': {
  				NODE_ENV: '"production"'
  			},
  			__DEVELOPMENT__: false
  		}),
  		new webpack.optimize.DedupePlugin(),
  		new webpack.optimize.OccurenceOrderPlugin(),
  		new webpack.optimize.UglifyJsPlugin({
  			compress: {
  				warnings: false
  			}
  		})
  	]
  })
}
