import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import allReducer from './reducer/allReducer';

const store =createStore(allReducer,
applyMiddleware(
        thunkMiddleware
    ));

console.log(store.getState());
ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
