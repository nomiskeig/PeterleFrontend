import React from "react";
import ReactTable from "react-table";
//import "../../../react-table.css";
import "./Behandlungentabelle.css";
import matchSorter from "match-sorter";
import { getPatientData } from "../../../utils/GlobalFunctions";

class Behandlungentabelle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clickedRow: null
		};
	}
	render() {
		const columns = [
			{
				Header: "Datum",
				accessor: "datum",
				id: "datum",
				width: 100,
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, { keys: ["datum"] }),
				filterAll: true
			},
			{
				Header: "Art",
				accessor: "art",
				id: "art",
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, { keys: ["art"] }),
				filterAll: true
			},
			{
				Header: "Maßnahme",
				accessor: "maßnahme",
				id: "maßnahme",
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, { keys: ["maßnahme"] }),
				filterAll: true
			},
			{
				Header: "Mittel",
				accessor: "mittel",
				id: "mittel",
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, { keys: ["mittel"] }),
				filterAll: true,
				width: 100
			},
			{
				Header: "Notiz",
				accessor: "notiz",
				id: "notiz",
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, { keys: ["notiz"] }),
				filterAll: true
			},
			{
				Header: "Beobachten",
				accessor: "beobachten",
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, { keys: ["beobachten"] }),
				filterAll: true
			}
		];
		return (
			<div className="tabellenDiv">
				<ReactTable
					data={this.props.data ? this.props.data.behandlungen : []}
					columns={columns}
					//minRows={60}
					defaultPageSize={
						this.props.data ? this.props.data.behandlungen.length : 60
					} //geht net warum auch immer
					style={{
						height: "250px",
						margin: "20px",
						background: "lightgray",
						width: "97.5%",
						overflow: "auto"
					}}
					filterable={true}
					showPagination={false}
					previousText={"Zurück"}
					nextText={"Vor"}
					PageText={"Seite"}
					rowsText={"Reihen"}
					pageText={"Seite"}
					ofText={"von"}
					noDataText={"Keine Behandlungen gefunden"}
					filterAll={false}
					getTrProps={(state, rowInfo) => {
						// Für Reihenauswahl
						if (rowInfo && rowInfo.row) {
							return {
								onClick: e => {
									this.setState({
										selectedRow: rowInfo.index
									});
									this.props.callback(rowInfo.index);
								},
								style: {
									background:
										rowInfo.index === this.state.selectedRow
											? "#00afec"
											: "lightgray"
								}
							};
						} else {
							return {};
						}
					}}

					//minRows={0}
					//defaultFilterMethod={(filter, row) =>
					//	row[filter.id].toLowerCase().startsWith(filter.value) ||
					//	row[filter.id].toLowerCase().endsWith(filter.value)
					//}
				/>
			</div>
		);
	}
}

export { Behandlungentabelle };
