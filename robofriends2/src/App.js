import React, { Component } from 'react';
//import { render } from 'react-dom';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''

        }
    }
    //when type in the search box it prints the value 
    //console.log(event.target.value);
    //react needs this syntax when you create your ownn functions 
    //onSearchChange = (event) =>
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
              
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;


//PROPS reads the proerties - recieve something and return something - deterministic
//PROPS never change
//STATE object that describes the application- search and robots- this can change - usually live in the parent componenent
//STATE >> PROPS