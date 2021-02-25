import React, { Component } from 'react';
//import { render } from 'react-dom';
import CardList from '../components/CardList';
import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import '../containers/App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


//STATE smart components
class App extends Component {
    constructor() {
        super()
        this.state = {
            //robots: robots,
            robots: [],
            searchfield: ''

        }
        console.log('component');
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: robots }));

    }


    //when type in the search box it prints the value 
    //console.log(event.target.value);
    //react needs this syntax when you create your ownn functions 
    //onSearchChange = (event) =>
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                </ErrorBoundary>
                </Scroll>
            </div>
        );
        //console.log('render');

    }

}

export default App;


//PROPS reads the proerties - recieve something and return something - deterministic
//PROPS never change
//STATE object that describes the application- search and robots- this can change - usually live in the parent componenent
//STATE >> PROPS