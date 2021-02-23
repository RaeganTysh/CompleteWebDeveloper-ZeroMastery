import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Card from './Card';
import CardList from './CardList'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots';
//import {robots, cats} from './robots';  
//ex-in the event you had another export object in the robots file named cats

ReactDOM.render(
    <CardList robots={robots} />

    , document.getElementById('root'));

reportWebVitals();
