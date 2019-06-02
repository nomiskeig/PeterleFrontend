import React from "react";
import InputBox from "../elements/InputBox"

var patientenData = require("../patienten.json");

class Suche extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nachname: "",
            vorname: "",
            rechnung: "",
            wohnort: "",
            id: ""
        }
        this.handleNachname = this.handleNachname.bind(this);
        this.handleVorname = this.handleVorname.bind(this);
        this.handleRechnung = this.handleRechnung.bind(this);
        this.handleWohnort = this.handleWohnort.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    render() {
        return (
            <div>
                <h1>Suche</h1>
                < InputBox nameFromParent="Nachname" onChangeHier={this.handleNachname} />
                < InputBox nameFromParent="Vorname" onChangeHier={this.handleVorname} />
                < InputBox nameFromParent="Rechnungsempfänger" onChangeHier={this.handleRechnung} />
                < InputBox nameFromParent="Wohnort" onChangeHier={this.handleWohnort} />
                <button onClick={this.handleButtonClick}>
                    OK
                </button>
                <h2>{this.state.id}</h2>
            </div>

        );
    }

    handleNachname(data) {
        this.setState({ nachname: data })
    }

    handleVorname(data) {
        this.setState({ vorname: data })
    }

    handleRechnung(data) {
        this.setState({ rechnung: data })
    }

    handleWohnort(data) {
        this.setState({ wohnort: data })
    }

    handleButtonClick() {

        if (this.state.nachname !== "") {
            let patientGesamt = patientenData.patienten.find(item => item.allgemein.nachname.toLowerCase() === this.state.nachname.toLowerCase());
            if (patientGesamt) {
                this.setState({ id: patientGesamt.id })
                this.props.history.push({
                    pathname: "/Main/" + patientGesamt.id,

                    search: "?nachname=" + this.state.nachname
                })
            } else {
                alert("Keine Ergebnisse für Suche gefunden")
            }
        }

        if (this.state.vorname !== "") {
            let patientGesamt = patientenData.patienten.find(item => item.allgemein.rechnungsempfaenger.toLowerCase() === this.state.vorname.toLowerCase());
            if (patientGesamt) {
                this.setState({ id: patientGesamt.id })
                this.props.history.push({
                    pathname: "/Main/" + patientGesamt.id,
                    search: "?vorname" + this.state.vorname,
                })
            } else {
                alert("Keine Ergebnisse für Suche gefunden")
            }
        }

        if (this.state.rechnung !== "") {
            let patientGesamt = patientenData.patienten.find(item => item.allgemein.rechnungsempfaenger.toLowerCase() === this.state.rechnung.toLowerCase());
            if (patientGesamt) {
                this.setState({ id: patientGesamt.id })
                this.props.history.push({
                    pathname: "/Main/" + patientGesamt.id,

                    search: "?rechnung=" + this.state.rechung
                })
            } else {
                alert("Keine Ergebnisse für Suche gefunden")
            }
        }

        if (this.state.wohnort !== "") {
            let patientGesamt = patientenData.patienten.find(item => item.allgemein.addresse.ort.toLowerCase() === this.state.wohnort.toLowerCase());
            if (patientGesamt) {
                this.setState({ id: patientGesamt.id })
                this.props.history.push({
                    pathname: "/Main/" + patientGesamt.id,

                    search: "?wohnort=" + this.state.wohnort
                })
            } else {
                alert("Keine Ergebnisse für Suche gefunden")
            }
        }



    }

}

export default Suche;