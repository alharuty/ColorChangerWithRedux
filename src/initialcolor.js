import React, { Component } from 'react';

class InitialColor extends Component {
    constructor() {
        super();

        this.customStyles = {
            content: {
                backgroundColor: "rgb(174, 174, 208)",
                width: "300px",
                height: "300px",
                border: "1px solid black",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        };
    }

    render() {
        return (
            <div className="initial-color" style={this.customStyles.content}>
                This is the initial color
            </div>
        )
    }
}

export default InitialColor;