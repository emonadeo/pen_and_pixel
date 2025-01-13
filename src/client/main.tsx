/* @refresh reload */
import "src/client/main.css";
import "tailwindcss/preflight.css";
import { render } from "solid-js/web";

import App from "src/client/App.tsx";

render(() => <App />, document.getElementById("root") as HTMLElement);
