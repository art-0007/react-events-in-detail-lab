// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

    handleClick = (event) => {
        // const array = []
        // array.push(event.clientX, event.clientY)
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    } 
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    Coordinate button
                </button>    
            </div>
        );
    }
}

export default CoordinatesButton;