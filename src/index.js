import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import createStore from redux
import { createStore } from "redux";
// import provider from react-redux
import { Provider } from 'react-redux'

import 'bulma/css/bulma.css';
import './styles.scss';
// import reducer(s)
import { carReducer } from './reducers'


// declare state
// use createStore and pass in reducer
const store = createStore(carReducer);
// **OPTIONAL** use combineReducers to pass in multiple reducers to createStore
// combineReducers comes from 'redux'

const rootElement = document.getElementById('root');
//wrap App with Provider tag
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
