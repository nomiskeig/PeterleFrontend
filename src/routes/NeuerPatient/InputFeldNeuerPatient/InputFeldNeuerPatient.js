import React from "react";
import "../../../utils/GlobalStyles.css";

class InputFeldNeuerPatient extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null
		};
	}

	render() {
		return (
			<div className="Input">
				<label>{this.props.name}</label>
				<input
					type="text"
					onChange={data => {
						this.props.callback(data.target.value);
						console.log(data.target.value);
					}}
					placeholder="Bitte eingeben"
				/>
			</div>
		);
	}
}

export default InputFeldNeuerPatient;
