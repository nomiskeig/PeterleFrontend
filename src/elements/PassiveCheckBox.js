import React from "react";
import "./stylesheets/TextBox.css"
import "./stylesheets/CheckBox.css"
class TextBox extends React.Component {
    render() {
        return(
            <div className="TextBox" style={{"width": this.props.width}}>
                <p className="TextBoxHead">{this.props.titel}</p>
                <input className="CheckBox" type="checkbox" defaultChecked={this.props.checked} disabled="disabled"/>
            </div>
        );
    }
}

export default TextBox;