import React from "react";
import { PatAllgemein } from "../../components/PatAllgemein/PatAllgemein";
import { Behandlungentabelle } from "../Kontakt/Components/Behandlungentabelle";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import "../../utils/GlobalStyles.css";
import "../../utils/GlobalComponents";
import "./NeueBehandlung.css";
import LinkButton from "../../components/LinkButton/LinkButton";
import InputBox from "../../components/InputBox/InputBox";
import Datepicker from "react-datepicker";
import InputDropdown from "../../components/InputDropdown/InputDropdown";
import "react-datepicker/dist/react-datepicker.css";
import de from "date-fns/locale/de";
import { getPatientData } from "../../utils/GlobalFunctions";
import axios from "axios";

registerLocale("de", de);
setDefaultLocale("de");

var patientenData = require("../../patienten.json");
const initialState = {
	datum: null,
	art: null,
	masnahme: null,
	mittel: null,
	notiz: null,
	beobachten: null,
	behandlung: null
};

class NeueBehandlung extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.match.params.id,
			datum: null,
			art: null,
			masnahme: null,
			mittel: null,
			notiz: null,
			beobachten: null,
			behandlung: null,
			patientGesamt: null
		};

		this.AddBehandlung = this.AddBehandlung.bind(this);

		//this.props.allePatientDaten = getPatientData();
		//this.props.patientGesamt = this.props.allePatientDaten[this.state.id];
	}
	componentWillMount() {
		axios
			.get("http://127.0.0.1:4000/api/patienten/get/" + this.state.id)
			.then(response => {
				const baum = response.data;
				this.setState({ patientGesamt: baum });
			});
	}

	AddBehandlung() {
		axios
			.post(
				"http://127.0.0.1:4000/api/patienten/add/behandlung/" + this.state.id,
				{
					_id: this.state.patientGesamt.behandlungen.length,
					datum: this.state.datum,
					art: this.state.art,
					maßnahme: this.state.masnahme,
					mittel: this.state.mittel,
					notiz: this.state.notiz,
					beobachten: this.state.beobachten,
					behandlung: this.state.behandlung
				}
			)
			.then(response => alert(response.data))
			.catch(err => console.log(err))
			.then(this.props.history.push("/Kontakt/" + this.state.id));
	}

	render() {
		//let neueBehandlungId = this.props.patientGesamt.behandlungen.length + 1;

		const artenOptions = [
			"Telefon",
			"Praxis",
			"Elekropost",
			"Post",
			"Hausbesuch",
			"Straße/Laden",
			"Sonstiges"
		];
		const behandlungOptions = [
			"Verlaufskontrolle",
			"Homöop. EA",
			"Folgeanamnese",
			"Akutbehandlung",
			"Dorn/Breuss",
			"Dorn-Methode",
			"Beratung",
			"NLP",
			"FRZM"
		];

		const masnahmeOptions = [
			"weiter laufen lassen",
			"Mittel wechseln",
			"Potenzändern",
			"Gabe wiederholen",
			"Frequenz ändern",
			"Verdünnung ändern",
			"Absetzung - Pause",
			"Einnahme wieder beginnen",
			"Akutmittel",
			"Chronisches Mittel",
			"sac Iac",
			"An Arzt verweisen",
			"Termin",
			"Behandlung beendet"
		];

		return (
			<div className="KontaktAlles BackgroundLightblue Grid1">
				{<PatAllgemein data={this.state.patientGesamt} />}
				<div className="Grid2">
					<div>
						Neue Behandlung:
						<div className="Input">
							<label>Datum:</label>
							<Datepicker
								onChange={date => this.setState({ datum: date })}
								selected={this.state.datum}
								dateFormat="dd.MM.yyyy"
								todayButton="Heute"
								showWeekNumbers
								placeholderText="Bitte auswählen"
							/>
						</div>
						<div className="Input">
							<label>Art:</label>
							<InputDropdown
								callback={data => this.setState({ art: data })}
								options={artenOptions}
							/>
						</div>
						<div className="Input">
							<label>Behandlung: </label>
							<InputDropdown
								callback={data => this.setState({ behandlung: data })}
								options={behandlungOptions}
							/>
						</div>
						<div className="Input">
							<label>Maßnahme:</label>
							<InputDropdown
								callback={data => this.setState({ masnahme: data })}
								options={masnahmeOptions}
							/>
						</div>
						<div className="Input">
							<label>Mittel:</label>
							<input
								type="text"
								onChange={data => this.setState({ mittel: data.target.value })}
								placeholder="Bitte eingeben"
							/>
						</div>
					</div>
					<div>
						<div className="invisible">Baum</div>
						<div className="Input InputTextarea">
							<label>Notizen:</label>
							<textarea
								className="textfeldInput"
								type="text"
								onChange={data => this.setState({ notiz: data.target.value })}
								placeholder="Bitte eingeben"
							/>
						</div>
						<div className="Input InputTextarea">
							<label>Beobachten:</label>
							<textarea
								className="textfeldInput"
								type="text"
								onChange={data =>
									this.setState({ beobachten: data.target.value })
								}
								placeholder="Bitte eingeben"
							/>
						</div>
					</div>
				</div>

				<div className="Buttons flex">
					<LinkButton name="Zurück" path={"/Kontakt/" + this.state.id} />
					<button type="button" onClick={this.AddBehandlung}>
						Speichern
					</button>
				</div>
			</div>
		);
	}
}

export default NeueBehandlung;
