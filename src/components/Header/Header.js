import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import { withRouter } from "react-router";

class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="header">
				<Link
					to={"/Main/" + this.props.match.params.id}
					className={this.props.main ? "active" : ""}
				>
					Übersicht
				</Link>
				<Link
					to={"/Kontakt/" + this.props.match.params.id}
					className={this.props.kontakt ? "active" : ""}
				>
					Kontakt
				</Link>
				<Link
					to={"/Dorn/" + this.props.match.params.id}
					className={this.props.dorn ? "active" : ""}
				>
					Dorn
				</Link>
			</div>
		);
	}
}

export default Header;
