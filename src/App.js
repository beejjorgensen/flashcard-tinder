import React, { Component } from 'react';
import './App.css';
import Menubar from './containers/Menubar';
import SignInModal from './components/SignInModal';
import Navigation from './components/Navigation';
import Language from './components/Language';
import JavaScript from './components/Javascript';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Navigation />
         <Route exact path="/" component={ Language }/>
           <Route path="/javascript" component={ JavaScript }/>
         <Route path="/flashPage" component={ Menubar }/>
         <Route path="/signIn" component={ SignInModal }/>
      </div>
    );
  }
}

export default App;
