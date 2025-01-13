import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import { parseArgs } from "@std/cli";
import { resolve } from "@std/path";
import { connectToWeb } from "vike-node";

const args = parseArgs(Deno.args);

const server = new Hono();

import { router } from "src/server/mod.ts";

server.route("/", router);

if (args.dev) {
	const vite = await import("vite");
	const viteDevServer = await vite.createServer({
		server: { middlewareMode: true },
	});
	const viteDevMiddleware = connectToWeb(viteDevServer.middlewares);
	server.use("*", async (c) => {
		return await viteDevMiddleware(c.req.raw);
	});
} else {
	server.use(
		"*",
		serveStatic({ root: resolve(import.meta.dirname!, "../dist") }),
	);
}

Deno.serve({ port: 3000 }, server.fetch);
