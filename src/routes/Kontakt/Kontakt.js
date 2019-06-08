import React from "react";
import { PatAllgemein } from "../../components/PatAllgemein/PatAllgemein";
import "../../utils/GlobalStyles.css";
import "./Kontakt.css";

var patientenData = require("../../patienten.json");

class Kontakt extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.match.params.id
		};
	}

	render() {
		let patientGesamt = patientenData.patienten.find(
			item => item.id == this.state.id
		);

		return (
			<div className="KontaktAlles">
				<PatAllgemein data={patientGesamt} />
			</div>
		);
	}
}

export default Kontakt;
