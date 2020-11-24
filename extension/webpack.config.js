const path = require("path");
const SizePlugin = require("size-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const { Configuration } = require("webpack");
const moduleFileExtensions = [
	"web.mjs",
	"mjs",
	"web.js",
	"js",
	"web.ts",
	"ts",
	"web.tsx",
	"tsx",
	"json",
	"web.jsx",
	"jsx"
];
/** @type { import('webpack').Configuration } */
const config = {
	devtool: "source-map",
	stats: "errors-only",
	resolve: {
		extensions: [".ts", ".js"] //moduleFileExtensions
	},
	entry: {
		background: "./src/background",
		options: "./src/options",
		handle: "./src/handle"
	},
	output: {
		path: path.join(__dirname, "distribution"),
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				test: /\.(js|ts|tsx)$/,
				loader: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new SizePlugin(),
		new CopyWebpackPlugin([
			{
				from: "**/*",
				context: "static"
				// ignore: [moduleFileExtensions.]
			}
			// {
			// 	from: "node_modules/webextension-polyfill/dist/browser-polyfill.min.js"
			// }
		])
	],
	optimization: {
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					mangle: false,
					compress: false,
					output: {
						beautify: true,
						indent_level: 2 // eslint-disable-line camelcase
					}
				}
			})
		]
	}
};
module.exports = config;
