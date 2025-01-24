import { Hono } from "@hono/hono";

import { router as cards } from "./cards.ts";

const router = new Hono();

router.route("/cards", cards);

export { router };
