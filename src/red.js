import React, { Component } from 'react';

class Red extends Component {
    constructor() {
        super();

        this.customStyles = {
            content: {
                backgroundColor: "rgba(201, 9, 9, 0.8)",
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
            <div className="red" style={this.customStyles.content}>
                This is red
            </div>
        )
    }
}

export default Red;