import React from "react";
import "../../utils/GlobalStyles.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import InputFeldNeuerPatient from "./InputFeldNeuerPatient/InputFeldNeuerPatient";
import axios from "axios";

class NeuerPatient extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			vorname: null,
			nachname: null
		};

		this.PatientSpeichern = this.PatientSpeichern.bind(this);
	}

	PatientSpeichern() {
		axios
			.post("http://127.0.0.1:4000/api/patienten/addPatient", {
				_id: 3,
				allgemein: {
					vorname: this.state.vorname,
					nachname: this.state.nachname
				}
			})
			.then(response => alert(response.data))
			.catch(err => console.log(err));
		//.then(this.props.history.push("/Kontakt/" + this.state.id));
	}

	render() {
		return (
			<div className="Pagewrapper">
				<Sidebar location={this.props.location} />
				<div>
					<InputFeldNeuerPatient
						name="Vorname:"
						callback={data => this.setState({ vorname: data })}
					/>

					<InputFeldNeuerPatient
						name="Nachname:"
						callback={data => this.setState({ nachname: data })}
					/>
					<button onClick={this.PatientSpeichern}>Speichern</button>
				</div>
			</div>
		);
	}
}

export default NeuerPatient;
