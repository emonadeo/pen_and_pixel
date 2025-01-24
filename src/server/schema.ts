import * as v from "@valibot/valibot";

export type SkillLevel = "noob" | "adept" | "pro";

export const skillCategorySchema = v.union([
	v.literal("physical"),
	v.literal("social"),
	v.literal("cognitive"),
]);

export type SkillCategory = v.InferOutput<typeof skillCategorySchema>;

export const skillSchema = v.object({
	name: v.string(),
	category: skillCategorySchema,
});

export type Skill = v.InferOutput<typeof skillSchema>;

export const characterSchema = v.object({
	name: v.string(),
	currentHealth: v.pipe(v.number(), v.integer(), v.minValue(0)),
	maxHealth: v.pipe(v.number(), v.integer(), v.minValue(1)),
	weightInKgs: v.pipe(v.number(), v.integer(), v.minValue(1)),
	heightInCms: v.pipe(v.number(), v.integer(), v.minValue(1)),
	armorValue: v.pipe(v.number(), v.integer(), v.minValue(0)),
	pronouns: v.string(),
	biography: v.string(),
});

export type Character = v.InferOutput<typeof characterSchema>;

export const actionSchema = v.union([
	v.literal("preaction"),
	v.literal("action"),
	v.literal("reaction"),
]);

export type Action = v.InferOutput<typeof actionSchema>;

export const cardSchema = v.object({
	name: v.string(),
	description: v.string(),
	action: actionSchema,
	skillCheckRequired: v.boolean(),
});

export type Card = v.InferOutput<typeof cardSchema>;
