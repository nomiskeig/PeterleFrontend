
import React from "react";
import queryString from "query-string"
import TextBox from "../elements/TextBox";
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
                                value: queryVorname
                            },
                            {
                                id: "nachname",
                                value: queryNachname
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
                    //minRows={0}
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

                <TextBox titel="Vorname" text={patientGesamt.allgemein.vorname}></TextBox>
                <TextBox titel="Nachname" text={patientGesamt.allgemein.nachname}></TextBox>
                <TextBox titel="PLZ" text={patientGesamt.allgemein.addresse.plz}></TextBox>
                
                </div>

            </div>

        );
    }
}

export default Main;