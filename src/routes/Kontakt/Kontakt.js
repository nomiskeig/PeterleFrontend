import React from "react";
import { PatAllgemein } from "../../components/PatAllgemein/PatAllgemein";
import "../../utils/GlobalStyles.css";
import "../../utils/GlobalComponents";
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
			<div className="KontaktAlles BackgroundLightblue Grid3">
				<PatAllgemein data={patientGesamt} />
				<div className="FlexVertikal">
					<div className="Beschriftung">Bemerkungen</div>
					<div className="Fließtext FlexGrow">
						{patientGesamt.allgemein.bemerkungen}
					</div>
				</div>
				<div className="FlexVertikal">
					<div className="Beschriftung">Krankheiten</div>
					<div className="Fließtext FlexGrow">
						{patientGesamt.allgemein.krankheiten}
					</div>
				</div>
			</div>
		);
	}
}

export default Kontakt;
