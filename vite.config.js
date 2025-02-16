/* eslint-disable no-undef */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import alias from "@rollup/plugin-alias";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };

  return defineConfig({
    base: process.env.VITE_ASSET_URL || "/",
    plugins: [
      react(),
      alias({
        entries: [
          { find: "@src", replacement: path.resolve(__dirname, "src") },
          {
            find: "@theme",
            replacement: path.resolve(__dirname, "src/theme"),
          },
          {
            find: "@assets",
            replacement: path.resolve(__dirname, "src/assets"),
          },
          {
            find: "@router",
            replacement: path.resolve(__dirname, "src/router"),
          },
          { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
          {
            find: "@components",
            replacement: path.resolve(__dirname, "src/components"),
          },
          {
            find: "@middlewares",
            replacement: path.resolve(__dirname, "src/middlewares"),
          },
          { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
          {
            find: "@contexts",
            replacement: path.resolve(__dirname, "src/contexts"),
          },
        ],
      }),
    ],
    envPrefix: "DFAB_",
    assetsInclude: ["**/*.xlsx"],
  });
};
