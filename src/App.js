import React, { Component } from 'react';
import './App.css';
import Menubar from './containers/Menubar';
import SignInModal from './components/SignInModal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menubar />
        <SignInModal />
      </div>
    );
  }
}

export default App;
