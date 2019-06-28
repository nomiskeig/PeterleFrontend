import React from "react";
import "./PatAllgemein.css";
import TextBox from "../TextBox/TextBox";
import "../../utils/GlobalStyles.css";
import PassiveCheckBox from "../CheckBox/PassiveCheckBox";

function PatAllgemein(props) {
	return (
		<div className="PatAllgemeinAlles Background">
			<div className="Grid2">
				<div className="Box">
					{props.data ? props.data.allgemein.vorname : ""}
				</div>
				<div className="Box">
					{props.data ? props.data.allgemein.nachname : ""}
				</div>
				<div className="Flex">
					<div className="Box">
						{props.data ? props.data.allgemein.addresse.plz : ""}
					</div>
					<div className="Box FlexGrow">
						{props.data ? props.data.allgemein.addresse.ort : ""}
					</div>
				</div>
				<div className="Flex">
					<div className="Box">
						{props.data ? props.data.allgemein.gebdatum : ""}
					</div>
					<PassiveCheckBox
						titel="Privat"
						checked={props.data ? props.data.privat : false}
					/>
				</div>
			</div>
			<div>
				<div className="FlexVertikal Textfeld">
					<div className="Beschriftung">Bemerkungen</div>
					<div className="Fließtext FlexGrow">
						{props.data ? props.data.allgemein.bemerkungen : ""}
					</div>
				</div>
				<div className="FlexVertikal Textfeld">
					<div className="Beschriftung">Krankheiten</div>
					<div className="Fließtext FlexGrow">
						{props.data ? props.data.allgemein.krankheiten : ""}
					</div>
				</div>
			</div>
		</div>
	);
}

export { PatAllgemein };
