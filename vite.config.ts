import deno from "@deno/vite-plugin";
import { resolve } from "@std/path";
import stylex from "@stylexjs/postcss-plugin";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

import babelConfig from "./babel.config.js";

export default defineConfig({
	build: {
		target: "esnext",
		cssMinify: "lightningcss",
	},
	css: {
		postcss: {
			plugins: [
				stylex({
					include: ["./**/*.{js,jsx,ts,tsx}"],
					useCSSLayers: true,
				}),
			],
		},
	},
	plugins: [deno(), solid({ babel: babelConfig })],
	resolve: {
		alias: {
			src: resolve(import.meta.dirname!, "./src"),
		},
	},
	server: {
		host: true,
	},
});
