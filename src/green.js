import React, { Component } from 'react';

class Green extends Component {
    constructor() {
        super();

        this.customStyles = {
            content: {
                backgroundColor: "rgba(9, 201, 52, 0.8)",
                width: "300px",
                height: "300px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        };
    }
    render() {
        return (
            <div className="green" style={this.customStyles.content}>
                This is green
            </div>
        )
    }
}

export default Green;