import React from "react";
import "./stylesheets/TextBox.css"
class TextBox extends React.Component {
    render() {
        return(
            <div className="TextBox">
                <p className="TextBoxHead">{this.props.titel}</p>
                <p className="TextBoxBody">{this.props.text}</p>
            </div>
        );
    }
}

export default TextBox;