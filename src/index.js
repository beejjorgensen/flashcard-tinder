import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// import promise from 'redux-promise';
// import './index.css';

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
// const store = createStoreWithMiddleware(reducers);
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>
  , document.querySelector('#root'));
