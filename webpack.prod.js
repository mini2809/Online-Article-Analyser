const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin= require('html-webpack-plugin')
const MinicssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');
const TercerPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports={
	entry: ['babel-polyfill','./src/client/index.js'],
	mode: 'production',
	output:{
		libraryTarget: 'var',
		library: 'Client'
	},
	optimization:{
		minimizer:[new OptimizeCssAssetsWebpackPlugin(), new TercerPlugin()],
	},
	devtool: 'inline-source-map',
	stats: 'verbose',
	module:{
		rules:[
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use:
					{
						loader: "babel-loader",
						options: 
						{
					        presets: ['@babel/preset-env']
				      	}
					}	
				},
				{
					test: /\.scss$/,
					use:[MinicssExtractPlugin.loader,'css-loader','sass-loader']
				}
			]
		},
	plugins:[
		new HtmlWebPackPlugin({
			filename:'index.html',
			template:'./src/client/views/index.html'
		}),
		new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
		new MinicssExtractPlugin({
			filename:'[name].css',
		}),
		new WorkboxPlugin.GenerateSW()
	]
}