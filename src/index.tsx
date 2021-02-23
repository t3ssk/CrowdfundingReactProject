import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, compose} from 'redux';
import './index.css';
import App from './App';
import modalSupportReducer from './store/reducers/modalReducer';
import optionsModalReducer from './store/reducers/optionsModalRediucer';
import optionsReducer from './store/reducers/optionsReducer';
import backersReducer from './store/reducers/backersReducer';



const rootReducer = combineReducers({
    supportModal: modalSupportReducer,
    optionsModal: optionsModalReducer,
    options: optionsReducer,
    backers: backersReducer
})


const store = createStore(
  rootReducer,  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION__())));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
