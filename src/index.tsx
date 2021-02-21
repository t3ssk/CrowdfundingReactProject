import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, compose} from 'redux';
import './index.css';
import App from './App';



const rootReducer = combineReducers({

})


const store = createStore(
  rootReducer,  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION__())));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
