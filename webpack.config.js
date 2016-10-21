var webpack = require('webpack');

module.exports = {
	entry: [
	    './src/today.js',
	    './src/clock.js'
	],
	module: {
	    loaders: [{
	        test:       /\.js?$/,
	        exclude:    /node_modules/,
	        loader:     'babel'
	    }]
	},
	resolve: {
	    extensions: ['', '.js']
	},
	output: {
	    path:       'dist',
	    publicPath: '/dist',
	    filename:   'bundle.js'
	}
};