import React from "react";
import "./PattAllgemein.css";
import TextBox from "../TextBox/TextBox";
import "../../utils/GlobalStyles.css";

function PatAllgemein(props) {
	return (
		<div className="PatAllgemeinAlles Background">
			<div className="Box">{props.data.allgemein.vorname}</div>
			<div className="Box">{props.data.allgemein.nachname}</div>
			<div className="Flex">
				<div className="Box">{props.data.allgemein.addresse.plz}</div>
				<div className="Box FlexGrow">{props.data.allgemein.addresse.ort}</div>
			</div>
		</div>
	);
}

export { PatAllgemein };
