import Surreal from "@surrealdb/surrealdb";

const db = new Surreal();
await db.connect("http://127.0.0.1:3001");
await db.use({ namespace: "pen_and_pixel", database: "main" });

export { db };
