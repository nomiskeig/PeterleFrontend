import React from "react";
import "../../utils/GlobalStyles.css";
import "./InputDropdown.css";
import { timingSafeEqual } from "crypto";
import { arrow_drop_down } from "material-design-icons";

class InputDropdown extends React.Component {
	constructor(props) {
		super();

		this.state = {
			showMenu: false,
			selectedValue: ""
		};

		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.itemClicked = this.itemClicked.bind(this);
	}

	showMenu(event) {
		event.preventDefault();
		this.setState({ showMenu: true }, () => {
			document.addEventListener("click", this.closeMenu);
		});
	}

	closeMenu(event) {
		if (!this.dropdownMenu.contains(event.target)) {
			this.setState({ showMenu: false }, () => {
				document.removeEventListener("click", this.closeMenu);
			});
		}
	}

	itemClicked(event) {
		this.setState(
			{ showMenu: false, selectedValue: event.target.textContent },
			() => {
				document.removeEventListener("click", this.closeMenu);
			}
		);
		this.props.callback(event.target.textContent);
	}

	render() {
		const einträge = this.props.options.map((id, index) => {
			if (index % 2 === 0)
				return (
					<div className="second" onClick={this.itemClicked} key={id}>
						{id}
					</div>
				);
			else
				return (
					<div className="first" onClick={this.itemClicked} key={id}>
						{id}
					</div>
				);
		});
		return (
			<div
				className="menu"
				ref={element => {
					this.dropdownMenu = element;
				}}
			>
				<input
					type="text"
					onClick={this.showMenu}
					placeholder="Bitte auswählen"
					className="NoMarginBottom"
					value={this.state.selectedValue}
					onChange={event =>
						this.setState({ selectedValue: event.target.value })
					}
				/>

				{this.state.showMenu ? (
					<div className="dropdownDiv">{einträge}</div>
				) : null}
			</div>
		);
	}
}

export default InputDropdown;
