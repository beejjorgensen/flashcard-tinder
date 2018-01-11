import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from '../containers/Landing';
import JavaScript from './Javascript';
import FlashPage from '../containers/FlashPage';


class App extends Component {
  componentDidMount() {
    // this.props.fetchUser();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            {/* <Route exact path="/currentUser" component={CurrentUser} /> */}
            <Route exact path="/javascript" component={JavaScript} />
            <Route path="/flashPage" component={FlashPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);