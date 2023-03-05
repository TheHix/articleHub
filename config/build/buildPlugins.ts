import { BuildOptions } from "./types/config";
import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack, { WebpackPluginInstance } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export const buildPlugins = (
	options: BuildOptions
): WebpackPluginInstance[] => {
	const { paths, isDev } = options;

	return [
		new HTMLWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css",
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
		new webpack.HotModuleReplacementPlugin(),
		new ReactRefreshPlugin(),
	];
};
