
import React from "react";
var patienten = require("../patienten.json");


class Info extends React.Component {
    constructor(props) {
        
    }
    render() {
        return(
            <div>
                <h1>ID: {this.props.match.params.id} </h1>


            </div>

        );
    }
}

export default Info;