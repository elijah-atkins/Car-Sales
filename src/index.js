import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import createStore from redux
// import provider from react-reduce

import 'bulma/css/bulma.css';
import './styles.scss';
// import reducer



// declare state
// use createStore and pass in reducer

const rootElement = document.getElementById('root');
//wrap App with Provider tag
ReactDOM.render(<App />, rootElement);
