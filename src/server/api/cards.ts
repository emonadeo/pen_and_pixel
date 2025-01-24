import { Hono } from "@hono/hono";
import { RecordId } from "@surrealdb/surrealdb";
import { parse } from "@valibot/valibot";

// TODO:
// import { vValidator } from "@hono/valibot-validator";

import { db } from "src/server/db.ts";
import { type Card, cardSchema } from "src/server/schema.ts";

const router = new Hono();

router.get("/", async (c) => {
	const cards = await db.select<Card>("card");
	return c.json(cards);
});

router.get("/:id", async (c) => {
	const id = c.req.param("id");
	const card = await db.select<Card>(new RecordId("card", id));
	if (!card) {
		return c.body(null, 404);
	}
	return c.json(card);
});

router.patch("/:id", (c) => {
	// TODO
	return c.body(null, 405);
});

router.post("/", async (c) => {
	const body = await c.req.json();
	// TODO: Catch Error
	try {
		const card = parse(cardSchema, body);
		const card_ = await db.create<Card>("card", card);
		// 201 Created
		return c.json(card_, 201);
	} catch (e) {
		// TODO: Types
		return c.json(e, 400);
	}
});

router.delete("/:id", async (c) => {
	const id = c.req.param("id");
	const card = await db.delete(new RecordId("card", id));
	if (!card) {
		return c.body(null, 404);
	}
	return c.body(null, 200);
});

export { router };
