import React, { Component } from 'react';  //destructuring Component

class Hello extends Component {
    render() {
        return (  //only returns a single thing unless wrapped in brackets
        <div>
            <h1>Hello World</h1>
            <p>Welcome to React</p>
        </div>
        );
    }
}

export default Hello;
