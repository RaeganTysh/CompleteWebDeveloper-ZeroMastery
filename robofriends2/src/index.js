import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
//import CardList from './CardList'
import reportWebVitals from './reportWebVitals';
import 'tachyons';

//import {robots, cats} from './robots';  
//ex-in the event you had another export object in the robots file named cats

ReactDOM.render(
    <App/>, document.getElementById('root'));

reportWebVitals();
