import React, { Component } from 'react';
import './App.css';
import FlashPage from './containers/FlashPage';
import SignInModal from './components/SignInModal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlashPage />
        <SignInModal />
      </div>
    );
  }
}

export default App;
