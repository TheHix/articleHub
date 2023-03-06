import { ReactRefreshPlugin } from "@pmmmwh/react-refresh-webpack-plugin";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { WebpackPluginInstance } from "webpack";

import { BuildOptions } from "./types/config";

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
