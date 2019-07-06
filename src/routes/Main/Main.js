import React from "react";
import queryString from "query-string";
import TextBox from "../../components/TextBox/TextBox";
import PassiveCheckBox from "../../components/CheckBox/PassiveCheckBox";
import LinkButton from "../../components/LinkButton/LinkButton";
import ReactTable from "react-table";
import "./Main.css";
import "../../react-table.css";
import axios from "axios";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "../../utils/GlobalStyles.css";

var patientenData = require("../../patienten.json");
//let patientGesamt = patientenData.patienten.find(item => item.id === this.state.id);
// Fehler in 143

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.match.params.id,
			selected: null,
			patienten: [],
			patientGesamt: null
		};
	}

	componentWillMount() {
		axios
			.get("http://127.0.0.1:4000/api/patienten/")
			.then(response => {
				const baum = response.data;
				this.setState({ patienten: baum });
			})
			.then(() => {
				let PatienGesamt = this.state.patienten.find(
					item => item._id == this.state.id
				);
				this.setState({ patientGesamt: PatienGesamt });
				console.log(this.state.patientGesamt);
			});
	}

	render() {
		let query;
		let queryNachname = "";
		let queryVorname = "";
		let queryRechnung = "";
		let queryWohnort = "";
		//let patientGesamt = this.state.patienten.find(
		//	item => item._id == this.state.id
		//);

		let queryValues = queryString.parse(this.props.location.search);

		if (queryValues.nachname) {
			queryNachname = queryValues.nachname;
		}
		if (queryValues.vorname) {
			queryVorname = queryValues.vorname;
		}
		if (queryValues.rechnung) {
			queryRechnung = queryValues.rechung;
		}
		if (queryValues.wohnort) {
			queryWohnort = queryValues.wohnort;
		}
		//console.log(patientenData.patienten);

		const columns = [
			{
				Header: "Vorname",
				accessor: "allgemein.vorname",
				id: "vorname",
				width: "110px"
			},
			{
				Header: "Nachname",
				accessor: "allgemein.nachname",
				id: "nachname",
				width: "110px"
			}
		];
		return (
			<div className="Pagewrapper">
				<Sidebar location={this.props.location} />
				<div className="Main">
					<Header match={this.props.match} main={true} />
					<div className="MainAlles">
						<div className="MainAllgemeinDaten">
							<TextBox
								titel="Vorname"
								text={
									this.state.patientGesamt
										? this.state.patientGesamt.allgemein.vorname
										: ""
								}
								width={"300px"}
							/>
							<TextBox
								titel="Nachname"
								text={
									this.state.patientGesamt
										? this.state.patientGesamt.allgemein.nachname
										: ""
								}
								width={"300px"}
							/>
							<TextBox
								titel="Wohnort"
								text={
									this.state.patientGesamt
										? this.state.patientGesamt.allgemein.addresse.plz +
										  " " +
										  this.state.patientGesamt.allgemein.addresse.ort
										: ""
								}
								width={"300px"}
							/>
							<div className="GebPrivNr">
								<TextBox
									titel="Geb-Datum"
									text={
										this.state.patientGesamt
											? this.state.patientGesamt.allgemein.gebdatum
											: ""
									}
									width={"125px"}
								/>
								<PassiveCheckBox
									titel="Privat"
									checked={
										this.state.patientGesamt
											? this.state.patientGesamt.privat
											: true
									}
								/>
								<TextBox
									titel="Pat.-Nr."
									text={
										this.state.patientGesamt ? this.state.patientGesamt._id : ""
									}
									width={"90px"}
								/>
							</div>
							<TextBox
								titel="Straße"
								text={
									this.state.patientGesamt
										? this.state.patientGesamt.allgemein.addresse.straße
										: ""
								}
								width={"300px"}
							/>
							<TextBox
								titel="Telefon Mobil"
								text={
									this.state.patientGesamt
										? this.state.patientGesamt.allgemein.nummern.mobil
										: ""
								}
								width={"300px"}
							/>
							<TextBox
								titel="Telefon Privat"
								text={
									this.state.patientGesamt
										? this.state.patientGesamt.allgemein.nummern.privat
										: ""
								}
								width={"300px"}
							/>
							<TextBox
								titel="Telefon Arbeit"
								text={
									this.state.patientGesamt
										? this.state.patientGesamt.allgemein.nummern.arbeit
										: ""
								}
								width={"300px"}
							/>
						</div>
						<div className="NotizenDiv">
							<div className="BemerkungHeadline">Bemerkungen</div>
							<div className="Bemerkung">
								{this.state.patientGesamt
									? this.state.patientGesamt.allgemein.bemerkungen
									: ""}
							</div>
							<div />
							<div>Krankheiten</div>
							<div className="Bemerkung">
								{this.state.patientGesamt
									? this.state.patientGesamt.allgemein.krankheiten
									: ""}
							</div>
						</div>
						<div>Platzhalter 1</div>
						<div>Platzhalter 2</div>
						<div className="MainButtons">
							<LinkButton path="/" search="" name="Suche" />
							<LinkButton
								path={"/Kontakt/" + this.state.id}
								name="Behandlungen"
							/>
							<LinkButton name="Details" />
							<LinkButton name="Dorn" />
							<LinkButton name="Amnese" />
							<LinkButton name="Rechnung" />
							<LinkButton name="Texte" />
							<LinkButton name="Neu" path={"/NeuerPatient"} />
							<LinkButton name="Ändern" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Main;
