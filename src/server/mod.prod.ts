import { serveStatic } from "@hono/hono/deno";

import server from "src/server/mod.ts";

server.use("*", serveStatic({ root: "./dist" }));
server.use("*", serveStatic({ root: "./dist", path: "index.html" }));

export default server;
