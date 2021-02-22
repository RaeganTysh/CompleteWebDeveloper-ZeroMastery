import React, { Component } from 'react';  //destructuring Component
import './Hello.css';

class Hello extends Component {
    render() {
        return (  //only returns a single thing unless wrapped in brackets 
            // f1 (font 1 tc= text center- tachyons npm package)
            //class is reserved for HTML and key workd in JS so need to use className for styling in React.js
            <div className='f1 tc'>
                <h1>Hello World</h1>
                {/*<p>Welcome to React</p>*/}
                <p>{this.props.greeting}</p>    {/*this comes from the index.js greeting props*/}
            /*</div>
        );
    }
}

//same as this function
const Hello = (props) => {
    return (
        <div className='f1 tc'>
            <h1>Hello World</h1>
            <p>{props.greeting}</p>
        </div>
    );
}


export default Hello;
