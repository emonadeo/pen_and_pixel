/* @refresh reload */

import { Route, Router } from "@solidjs/router";
import { render } from "solid-js/web";

import "src/client/mod.css";

import { Admin } from "src/client/views/admin/mod.tsx";

render(
	() => (
		<Router>
			<Route path="/"></Route>
			{/* Can edit Rulesets, Users, Games*/}
			<Route path="/admin" component={Admin}></Route>
			<Route path="/games">
				<Route path="/:game">
					{/* Control Panel of the Dungeon Master.
					Can edit basically anything, add new NPCs, invite Players, blablabla*/}
					<Route path="/dm"></Route>
					{/* The „Table Top“. Main Stream window. Anyone can view. Only the DM can do actions.
					 TODO: But what about Players who roll a dice or something? */}
					<Route path="/table"></Route>
					<Route path="/characters">
						{/* Same as :character, but infers the character from linked user.
						Returns 404 if user doesn't have a linked character.*/}
						<Route path="/me"></Route>
						{/* Can be any character of the game.
						NPCs are characters without a linked user,
						Players are characters with a linked user.
						A Player can only access their linked character.
						The DM can access all characters (including Players).
						For all others this returns 404. */}
						<Route path="/:character"></Route>
					</Route>
				</Route>
			</Route>
		</Router>
	),
	document.getElementById("root") as HTMLElement,
);
