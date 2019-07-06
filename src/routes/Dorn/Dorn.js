import React from "react";
import "./Dorn.css";
//import "../../utils/GlobalStyles.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

class Dorn extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Pagewrapper">
				<Sidebar location={this.props.location} />
				<div className="Main">
					<Header match={this.props.match} dorn={true} />
					<div className="MainAllesDorn" />
				</div>
			</div>
		);
	}
}

export default Dorn;
