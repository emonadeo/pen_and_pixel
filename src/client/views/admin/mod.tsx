import * as stylex from "@stylexjs/stylex";
import type { ParentComponent } from "solid-js";

import { Sidebar } from "./sidebar.tsx";

const styles = stylex.create({
	page: {
		height: "100%",
		display: "grid",
		gridTemplateColumns: "256px 1fr",
	},
	sidebar: {
		padding: 16,
	},
});

export const Admin: ParentComponent = (props) => {
	return (
		<div {...stylex.attrs(styles.page)}>
			<Sidebar />
			<div>{props.children}</div>
		</div>
	);
};
