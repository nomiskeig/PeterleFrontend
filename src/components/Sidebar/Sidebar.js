import React from "react";
import "./Sidebar.css";
import ReactTable from "react-table";
import queryString from "query-string";
import { getPatienten } from "../../utils/GlobalFunctions";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { brotliDecompress } from "zlib";
class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: null,
			patienten: []
		};
	}
	async componentWillMount() {
		axios.get("http://127.0.0.1:4000/api/patienten/").then(response => {
			const baum = response.data;
			this.setState({ patienten: baum });
		});
	}

	render() {
		let queryNachname = "";
		let queryVorname = "";
		let queryRechnung = "";
		let queryWohnort = "";
		//let patientGesamt = this.state.patienten.find(
		//	item => item._id == this.state.id
		//);

		let queryValues = queryString.parse(this.props.location.search);
		console.log(queryValues);

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

		let pathFull = this.props.location.pathname;
		let pathArray = pathFull.split("/");
		let path = pathArray[1];
		return (
			<div className="Sidebar Flex FlexVertikal">
				<h1>PETERLE</h1>
				<ReactTable
					data={this.state.patienten}
					columns={columns}
					defaultPageSize={20}
					filtered={[
						{
							id: "vorname",
							value: queryVorname.toLowerCase()
						},
						{
							id: "nachname",
							value: queryNachname.toLowerCase()
						}
					]}
					style={{
						height: "300px",
						margin: "20px",
						background: "white",
						border: "2px solid black",
						marginLeft: "8px",
						marginRight: "8px"
					}}
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
						row[filter.id].toLowerCase().endsWith(filter.value)
					}
					getTrProps={(state, rowInfo) => {
						// Für Reihenauswahl
						if (rowInfo && rowInfo.row) {
							return {
								onClick: e => {
									this.setState({
										selected: rowInfo.index
									});
									this.props.history.push({
										pathname: `/${path}/${rowInfo.original._id}`,

										search: this.props.location.search
									});
									console.log(this.props.location);
								}
							};
						} else {
							return {};
						}
					}}
				/>
				<button onClick={() => this.props.history.push("/NeuerPatient")}>
					Neuer Patient
				</button>
				<button onClick={() => this.props.history.push("/Main")}>Zurück</button>
			</div>
		);
	}
}

export default withRouter(Sidebar);
