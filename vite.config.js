/* eslint-disable no-undef */
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === "development";
  let server = {
    port: 3005,
  };

  return {
    plugins: [react()],
    esbuild: {
      logOverride: { "this-is-undefined-in-esm": "silent" },
    },
    server,
    resolve: {
      alias: [{ find: "~", replacement: path.resolve(__dirname, "src") }],
    },
    css: {
      modules: {
        generateScopedName: isDevelopment
          ? "[name]__[local]__[hash:base64:5]"
          : "[hash:base64:5]",
      },
    },
  };
});
