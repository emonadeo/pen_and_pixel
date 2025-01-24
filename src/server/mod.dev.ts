// TODO: Migrate to `@hono/vite-dev-server` once
// JSR works with Vite and Deno (https://github.com/denoland/deno/issues/23929)

import { connectToWeb } from "vike-node";

import server from "src/server/mod.ts";

const vite = await import("vite");
const viteDevServer = await vite.createServer({
	server: { middlewareMode: true },
});
const viteDevMiddleware = connectToWeb(viteDevServer.middlewares);
server.use("*", async (c) => {
	return await viteDevMiddleware(c.req.raw);
});

export default server;
