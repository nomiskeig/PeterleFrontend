import React from "react";
import "./LinkButton.css";
import { withRouter } from "react-router-dom";

class LinkButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick() {
		this.props.history.push({
			pathname: this.props.path,
			search: this.props.search
		});
	}
	render() {
		return (
			<button className="LinkButton" onClick={this.handleButtonClick}>
				{this.props.name}
			</button>
		);
	}
}
export default withRouter(LinkButton);
