import React, { Component } from 'react';
// import { Reveal, Grid, Button, Card } from 'semantic-ui-react';
// import { connect } from 'react-redux';
// import { fetchCards } from '../actions/index';
import '../App.css';
import '../style.css';

// import FlashcardFront from '../components/FlashcardFront';
// import FlashcardBack from '../components/FlashcardBack';
// import FlashcardButton from '../components/FlashcardButton';

class FlashCard extends Component {
  render() {
    const { front, back } = this.props;
    return (
      <div className="card-container">
        <div className="card">
          <div className="front">
            <div className="frontCard">
              {Object.keys(front).length === 0
                ? ''
                : this.props.front.frontcard.item}
            </div>
          </div>
          <div className="back">
            <div className="backCard">
              {Object.keys(back).length === 0
                ? ''
                : this.props.back.backcard.definition}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FlashCard;
