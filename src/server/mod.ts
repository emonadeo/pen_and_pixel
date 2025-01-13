import { Hono } from "@hono/hono";

const router = new Hono();

router.get("/hello", (c) => {
	return c.text("Hello Hono!");
});

export { router };
