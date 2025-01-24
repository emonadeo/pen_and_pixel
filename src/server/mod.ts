import { Hono } from "@hono/hono";

import { router } from "src/server/api/mod.ts";

const server = new Hono();
server.route("/api", router);

export default server;
