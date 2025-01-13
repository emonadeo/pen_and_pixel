import * as stylex from "@stylexjs/stylex";
import { createSignal } from "solid-js";

const styles = stylex.create({
	base: {
		backgroundColor: "lime",
	},
});

function App() {
	const [count, setCount] = createSignal(0);

	return (
		<div {...stylex.props(styles.base)}>
			<h1>Vite + Solid</h1>
			<div class="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count()}
				</button>
			</div>
			<p class="read-the-docs">
				Click on the Vite and Solid logos to learn more
			</p>
		</div>
	);
}

export default App;
