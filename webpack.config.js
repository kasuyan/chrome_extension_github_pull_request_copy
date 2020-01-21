const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'popup.js',
		path: path.resolve(__dirname, './dist/')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [ 'vue-style-loader', 'css-loader' ]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: './src/popup.html',
			filename: 'popup.html'
		}),
		new CopyPlugin([
			{ from: './src/background.js', to: 'background.js' },
			{ from: './src/content.js', to: 'content.js' },
			{ from: './src/manifest.json', to: 'manifest.json' }
		])
	],
	resolve: {
		extensions: [ '.vue', '.js' ],
		alias: {
			vue$: 'vue/dist/vue.esm.js'
		}
	},
	devServer: {
		index: 'popup.html',
		historyApiFallback: true
	}
};
