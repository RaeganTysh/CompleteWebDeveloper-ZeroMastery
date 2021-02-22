import React from 'react';      //name of the package
import ReactDOM from 'react-dom';  //what screen we are rendering too react-native(renders to mobile)
import './index.css';         //needs a source location            
//import App from './App';      //assumes .js
import Hello from './Hello';
import reportWebVitals from './reportWebVitals';  //use to be regiserServiceWorker previous CRA
import 'tachyons';    //npm package for CSS




//old way - render to HTML  use App.js above
//ReactDOM.render(<App />, document.getElementById('root'));  //uses the App.js above and registerServiceWorker above
//registerServiceWorker();

ReactDOM.render(<Hello greeting= {'Hello React Ninja'} />, document.getElementById('root'));  //uses the Hello.js above and registerServiceWorker above
reportWebVitals();

//ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'))  //uses the html tag

//new way
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
