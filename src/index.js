import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import App from './App';
import reducers from './reducers';
import SignInModal from './components/SignInModal';
import Navigation from './components/Navigation';
import Language from './components/Language';
import JavaScript from './components/Javascript';
import Menubar from './containers/Menubar';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="App">
        <Route path="/javascript" component={JavaScript} />
        <Route path="/flashPage" component={Menubar} />
        <Route path="/signIn" component={SignInModal} />
        <Route exact path="/" component={Language} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
