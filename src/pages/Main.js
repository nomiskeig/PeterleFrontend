
import React from "react";
import queryString from "query-string"
import TextBox from "../elements/TextBox";
import PassiveCheckBox from "../elements/PassiveCheckBox"
import ReactTable from "react-table";
import "./stylesheets/Main.css";
import "../react-table.css";


var patientenData = require("../patienten.json");
//let patientGesamt = patientenData.patienten.find(item => item.id === this.state.id);



class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            selected: null,

        }


    }


    render() {

        let query;
        let queryNachname = "";
        let queryVorname = "";
        let queryRechnung = "";
        let queryWohnort = "";
        let patientGesamt = patientenData.patienten.find(item => item.id == this.state.id);

        let queryValues = queryString.parse(this.props.location.search);
        
        if (queryValues.nachname) { queryNachname = queryValues.nachname; }
        if (queryValues.vorname) { queryVorname = queryValues.vorname; }
        if (queryValues.rechnung) { queryRechnung = queryValues.rechung; }
        if (queryValues.wohnort) { queryWohnort = queryValues.wohnort; }


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
        ]
        console.log(this.state.id)
        return (
            <div className="MainAlles">
                <ReactTable

                    data={patientenData.patienten}
                    columns={columns}
                    defaultPageSize={20}
                    filtered={
                        [
                            {
                                id: "vorname",
                                value: queryVorname.toLowerCase()
                            },
                            {
                                id: "nachname",
                                value: queryNachname.toLowerCase()
                            }
                        ]
                    }
                    style={{ height: "300px", margin: "10px", background: "lightgray"}}
                    showPagination={false}
                    previousText={"Zurück"}
                    nextText={"Vor"}
                    PageText={"Seite"}
                    rowsText={"Reihen"}
                    pageText={"Seite"}
                    ofText={"von"}
                    noDataText={"Keine Ergebnisse"}
                    //minRows={0}
                    defaultFilterMethod={(filter, row) =>
                        row[filter.id].toLowerCase().startsWith(filter.value) ||
                        row[filter.id].toLowerCase().endsWith(filter.value)}
                    getTrProps={(state, rowInfo) => { // Für Reihenauswahl
                        if (rowInfo && rowInfo.row) {
                            return {
                                onClick: (e) => {
                                    this.setState({
                                        selected: rowInfo.index
                                        
                                    });
                                    console.log(rowInfo.original.id)
                                    this.props.history.push({
                                        pathname: "/Main/"+rowInfo.original.id,
                                        
                                        search: this.props.location.search
                                    })
                                },
                            }
                        } else {
                            return {}
                        }
                    }
                    }
                />
                <div className="MainAllgemeinDaten">

                <TextBox titel="Vorname" text={patientGesamt.allgemein.vorname} width={"300px"}></TextBox>
                <TextBox titel="Nachname" text={patientGesamt.allgemein.nachname }width={"300px"}></TextBox>
                <TextBox titel="Wohnort" text={patientGesamt.allgemein.addresse.plz + " " + patientGesamt.allgemein.addresse.ort} width={"300px"}></TextBox>
                <TextBox titel="Geb-Datum" text={patientGesamt.allgemein.gebdatum} width={"125px"}></TextBox>
                <PassiveCheckBox titel="Privat" checked={patientGesamt.privat}></PassiveCheckBox>
                <TextBox titel="Pat.-Nr." text={patientGesamt.id} width={"90px"}></TextBox>
                <TextBox titel="Straße" text={patientGesamt.allgemein.addresse.straße} width={"300px"}></TextBox>
                <TextBox titel="Telefon Mobil" text={patientGesamt.allgemein.nummern.mobil} width={"300px"}></TextBox>
                <TextBox titel="Telefon Privat" text={patientGesamt.allgemein.nummern.privat} width={"300px"}></TextBox>
                <TextBox titel="Telefon Arbeit" text={patientGesamt.allgemein.nummern.arbeit} width={"300px"}></TextBox>
                
                </div>

            </div>

        );
    }
}

export default Main;