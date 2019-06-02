

import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Test from "./pages/test";
import Main from "./pages/Main";
import Suche from "./pages/Suche";



function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router forceRefresh={true}>
     

        <Route path="/" exact component={Suche}/>
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <Route path="/test" component={Test} />
        <Route path="/Main/:id" component={Main} />
      
    </Router>
  );
}

export default AppRouter;

