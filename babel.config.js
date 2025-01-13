export default {
	plugins: [
		["@babel/plugin-syntax-typescript", { isTSX: true }],
		[
			"@stylexjs/babel-plugin",
			{
				dev: Deno.env.get("NODE_ENV") === "development",
				runtimeInjection: false,
				genConditionalClasses: true,
				// treeshakeCompensation: true,
				unstable_moduleResolution: {
					type: "commonJS",
				},
			},
		],
	],
};
