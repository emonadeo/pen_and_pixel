import * as stylex from "@stylexjs/stylex";
import type { Component } from "solid-js";

const styles = stylex.create({
	base: {
		padding: 16,
		borderRightStyle: "dashed",
		borderRightColor: "#431407",
		borderRightWidth: 1,
	},
	link: {
		height: "2rem",
		paddingInline: 16,
		display: "grid",
		alignItems: "center",
		borderRadius: 2,
		backgroundColor: {
			":hover": "#333",
		},
	},
});

export const Sidebar: Component = () => (
	<div {...stylex.attrs(styles.base)}>
		<ul>
			<li>
				<a {...stylex.attrs(styles.link)} href="/admin/cards">
					<p>Cards</p>
				</a>
			</li>
			<li>
				<a {...stylex.attrs(styles.link)} href="/admin/characters">
					<p>Characters</p>
				</a>
			</li>
		</ul>
	</div>
);
