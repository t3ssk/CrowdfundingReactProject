import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {createStore, combineReducers, compose} from 'redux';
import './index.css';
import App from './App';
import modalSupportReducer from './store/reducers/modalReducer';
import optionsModalReducer from './store/reducers/optionsModalRediucer';
import optionsReducer from './store/reducers/optionsReducer';
import backersReducer from './store/reducers/backersReducer';
import { userReducer } from './store/reducers/userReducer';
import { userDataReducer } from './store/reducers/userDataReducer';



const rootReducer = combineReducers({
    supportModal: modalSupportReducer,
    optionsModal: optionsModalReducer,
    options: optionsReducer,
    backers: backersReducer,
    user: userReducer,
    userData: userDataReducer
})


const store = createStore(
  rootReducer,  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION__())));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
