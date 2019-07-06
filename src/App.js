import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./routes/Main/Main";
import Suche from "./routes/Suche/Suche";
import Kontakt from "./routes/Kontakt/Kontakt";
import NeueBehandlung from "./routes/NeueBehandlung/NeueBehandlung";
import NeuerPatient from "./routes/NeuerPatient/NeuerPatient";
import Dorn from "./routes/Dorn/Dorn";

import "./utils/GlobalStyles.css";

import SideNav, {
	Toggle,
	Nav,
	NavItem,
	NavIcon,
	NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function AppRouter() {
	return (
		<div>
			<Router forceRefresh={true}>
				<div className="Flex">
					<Route path="/" exact component={Suche} />
					<Route path="/Main/:id" component={Main} />
					<Route path="/Main" exact component={Main} />
					<Route path="/NeueBehandlung/:id" component={NeueBehandlung} />
					<Route path="/Kontakt/:id" component={Kontakt} />
					<Route path="/NeuerPatient" component={NeuerPatient} />
					<Route path="/Dorn/:id" component={Dorn} />
				</div>
			</Router>
		</div>
	);
}
export default AppRouter;
