import React from "react";
import { PatAllgemein } from "../../components/PatAllgemein/PatAllgemein";
import { Behandlungentabelle } from "./Components/Behandlungentabelle";
import "../../utils/GlobalStyles.css";
import "../../utils/GlobalComponents";
import "./Kontakt.css";
import LinkButton from "../../components/LinkButton/LinkButton";
import axios from "axios";

var patientenData = require("../../patienten.json");

class Kontakt extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.match.params.id,
			patientGesamt: null,
			selectedRowTabelle: null
		};
		this.tabellencallback = this.tabellencallback.bind(this);
		this.deleteBehandlung = this.deleteBehandlung.bind(this);
	}

	tabellencallback(data) {
		this.setState({ selectedRowTabelle: data });
		console.log(data);
	}

	deleteBehandlung() {
		axios
			.post(
				"http://127.0.0.1:4000/api/patienten/remove/behandlung/" +
					this.state.id +
					"/" +
					this.state.selectedRowTabelle,

				{}
			)
			.then(response => alert(response.data))
			.catch(err => console.log(err));
		window.location.reload();
	}

	componentWillMount() {
		axios
			.get("http://127.0.0.1:4000/api/patienten/get/" + this.state.id)
			.then(response => {
				const baum = response.data;
				this.setState({ patientGesamt: baum });
				console.log(response.data);
			});
	}

	render() {
		let patientGesamt = patientenData.patienten.find(
			item => item.id == this.state.id
		);

		return (
			<div className="KontaktAlles BackgroundLightblue Grid1">
				<PatAllgemein
					data={this.state.patientGesamt ? this.state.patientGesamt : null}
				/>
				<Behandlungentabelle
					data={this.state.patientGesamt ? this.state.patientGesamt : null}
					callback={this.tabellencallback}
				/>

				<div className="Buttons flex">
					<LinkButton name="Zurück" path={"/Main/" + this.state.id} />
					<LinkButton name="Neu" path={"/NeueBehandlung/" + this.state.id} />
					<button onClick={this.deleteBehandlung}> Löschen </button>
				</div>
			</div>
		);
	}
}

export default Kontakt;
