import React from "react";
import "./TextBox.css";
class TextBox extends React.Component {
	render() {
		return (
			<div className="TextBox" style={{ width: this.props.width }}>
				<p className="TextBoxHead">{this.props.titel}</p>
				<p className="TextBoxBody">{this.props.text}</p>
			</div>
		);
	}
}

export default TextBox;
