import { BuildOptions } from "./types/config";
import { ResolveOptions } from "webpack";

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  const { paths } = options;

  return {
    extensions: [".tsx", ".ts", ".js"],
    modules: [paths.src, "node_modules"],
    preferAbsolute: true,
    mainFiles: ["index"],
    alias: {
      "@": paths.src,
    },
  };
};
