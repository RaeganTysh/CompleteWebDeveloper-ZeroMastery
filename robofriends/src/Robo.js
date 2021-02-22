import React from 'react';      //name of the package
import ReactDOM from 'react-dom';  //what screen we are rendering too react-native(renders to mobile)
import './robo.css';         //needs a source location            
//import App from './App';      //assumes .js
import reportWebVitals from './reportWebVitals';  
import 'tachyons';    //npm package for CSS

ReactDOM.render(<Card />, document.getElementById('root'));  
reportWebVitals();
