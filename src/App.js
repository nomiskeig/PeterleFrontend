import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./routes/Main/Main";
import Suche from "./routes/Suche/Suche";
import Kontakt from "./routes/Kontakt/Kontakt";
import NeueBehandlung from "./routes/NeueBehandlung/NeueBehandlung";
import NeuerKontakt from "./routes/NeuerKontakt/NeuerKontakt";

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
		<Router forceRefresh={true}>
			<Route path="/" exact component={Suche} />
			<Route path="/Main/:id" component={Main} />
			<Route path="/Main" exact component={Main} />
			<Route path="/NeueBehandlung/:id" component={NeueBehandlung} />
			<Route path="/Kontakt/:id" component={Kontakt} />
			<Route path="/NeuerKontakt" component={NeuerKontakt} />
		</Router>
	);
}
export default AppRouter;
