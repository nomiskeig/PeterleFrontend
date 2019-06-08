import React from "react";
import "./PattAllgemein.css";
import TextBox from "../TextBox/TextBox";
import "../../utils/GlobalStyles.css";
import PassiveCheckBox from "../CheckBox/PassiveCheckBox";

function PatAllgemein(props) {
	return (
		<div className="PatAllgemeinAlles Background">
			<div className="Box">{props.data.allgemein.vorname}</div>
			<div className="Box">{props.data.allgemein.nachname}</div>
			<div className="Flex">
				<div className="Box">{props.data.allgemein.addresse.plz}</div>
				<div className="Box FlexGrow">{props.data.allgemein.addresse.ort}</div>
			</div>
			<div className="Flex">
				<div className="Box">{props.data.allgemein.gebdatum}</div>
				<PassiveCheckBox titel="Privat" checked={props.data.privat} />
			</div>
		</div>
	);
}

export { PatAllgemein };
