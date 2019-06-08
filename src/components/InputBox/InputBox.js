import React from "react";
import "./InputBox.css";

class InputBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
		this.props.onChangeHier(event.target.value);
	}

	render() {
		return (
			<form>
				<label className="InputBoxLabel">
					{this.props.nameFromParent}:
					<input
						className="InputBoxInput"
						type="text"
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
			</form>
		);
	}
}
export default InputBox;
