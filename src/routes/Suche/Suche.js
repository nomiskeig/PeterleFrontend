import React from "react";
import InputBox from "../../components/InputBox/InputBox";
import "./Suche.css";

var patientenData = require("../../patienten.json");

class Suche extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nachname: "",
			vorname: "",
			rechnung: "",
			wohnort: "",
			id: ""
		};

		this.handleButtonClick = this.handleButtonClick.bind(this);
	}
	render() {
		return (
			<div className="SucheAlles ">
				<h1>P.E.T.E.R.L.E</h1>
				<div className="rand">
					<h1>Suchen</h1>
					<div className="Input part">
						<label>Vorname:</label>
						<input
							type="text"
							onChange={data => this.setState({ vorname: data.target.value })}
							placeholder="Bitte eingeben"
						/>
					</div>
					<div className="Input part">
						<label>Nachname:</label>
						<input
							type="text"
							onChange={data => this.setState({ nachname: data.target.value })}
							placeholder="Bitte eingeben"
						/>
					</div>
					<div className="Input part">
						<label>Wohnort:</label>
						<input
							type="text"
							onChange={data => this.setState({ wohnort: data.target.value })}
							placeholder="Bitte eingeben"
						/>
					</div>
					<div className="Input part">
						<label>Rechn. Empf.:</label>
						<input
							type="text"
							onChange={data => this.setState({ rechnung: data.target.value })}
							placeholder="Bitte eingeben"
						/>
					</div>
					<button className="part" onClick={this.handleButtonClick}>
						Suchen
					</button>
					<button
						className="part breiterButton"
						onClick={() => this.props.history.push("/Main")}
					>
						{" "}
						Weiter ohne Suche{" "}
					</button>
				</div>
			</div>
		);
	}

	handleButtonClick() {
		if (this.state.nachname !== "") {
			let patientGesamt = patientenData.patienten.find(
				item =>
					item.allgemein.nachname.toLowerCase() ===
					this.state.nachname.toLowerCase()
			);
			if (patientGesamt) {
				this.setState({ id: patientGesamt.id });
				this.props.history.push({
					pathname: "/Main/" + patientGesamt.id,

					search: "?nachname=" + this.state.nachname
				});
			} else {
				alert("Keine Ergebnisse für Suche gefunden");
			}
		}

		if (this.state.vorname !== "") {
			let patientGesamt = patientenData.patienten.find(
				item =>
					item.allgemein.rechnungsempfaenger.toLowerCase() ===
					this.state.vorname.toLowerCase()
			);
			if (patientGesamt) {
				this.setState({ id: patientGesamt.id });
				this.props.history.push({
					pathname: "/Main/" + patientGesamt.id,
					search: "?vorname=" + this.state.vorname
				});
			} else {
				alert("Keine Ergebnisse für Suche gefunden");
			}
		}

		if (this.state.rechnung !== "") {
			let patientGesamt = patientenData.patienten.find(
				item =>
					item.allgemein.rechnungsempfaenger.toLowerCase() ===
					this.state.rechnung.toLowerCase()
			);
			if (patientGesamt) {
				this.setState({ id: patientGesamt.id });
				this.props.history.push({
					pathname: "/Main/" + patientGesamt.id,

					search: "?rechnung=" + this.state.rechung
				});
			} else {
				alert("Keine Ergebnisse für Suche gefunden");
			}
		}

		if (this.state.wohnort !== "") {
			let patientGesamt = patientenData.patienten.find(
				item =>
					item.allgemein.addresse.ort.toLowerCase() ===
					this.state.wohnort.toLowerCase()
			);
			if (patientGesamt) {
				this.setState({ id: patientGesamt.id });
				this.props.history.push({
					pathname: "/Main/" + patientGesamt.id,

					search: "?wohnort=" + this.state.wohnort
				});
			} else {
				alert("Keine Ergebnisse für Suche gefunden");
			}
		}
	}
}

export default Suche;
