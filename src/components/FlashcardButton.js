import React, { Component } from 'react';
// import flashCardData from '../application_data';
import { Button } from 'semantic-ui-react';

class FlashCardButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: [],
      green: []
    };

  };

  handleClickRed = (flashCardId) => {
    console.log(flashCardId + ' red was clicked!')
    this.setState({
      red: this.state.red
    });
  }

  handleClickGreen = (flashCardId) => {
    console.log(flashCardId + ' green was clicked!')
    this.setState({
      green: this.state.green
    });
  }

  /*
  handleNextFlashCard = (flashCardId) => {
    const nextFlashCard = this.state.green.map((flashCard) => {
      // if else?? 
    });
    // check state and move to next flash card
    this.setState({
      green: nextFlashCard
    });
  }
  */

  render() {
    return (
      <div>
        <div className='flash-card'>
          {this.props.question}
        </div>
        <div>
          {this.props.answer}
        </div>
        <div>
          <Button color='red' onClick={this.handleClickRed}>
          <div>Hate It!</div>
          </Button>
          <Button color='green' onClick={this.handleClickGreen}>
          <div>Like It!</div>
          </Button>
        </div>
      </div>
    );
  }
}

export default FlashCardButton;
