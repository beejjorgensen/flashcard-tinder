import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import '../App.css';

class FlashCardButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: [],
      green: [],
      yellow: [],
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

  handleClickYellow = (flashCardId) => {
    console.log(flashCardId + ' yellow was clicked!')
    this.setState({
      yellow: this.state.yellow
    });
  }

  render() {
    return (
      <div>
        <Button color='red' circular onClick={this.handleClickRed} style={ { margin: '0 1rem 0 0', height: '5rem', width: '5rem' } }>
        </Button>
        <Button color='yellow' circular onClick={this.handleClickYellow} style={ { margin: '0 1rem 0 1rem', height: '5rem', width: '5rem' } }>
        </Button>
        <Button color='green' circular onClick={this.handleClickGreen} style={ { margin: '0 0 0 1rem', height: '5rem', width: '5rem' } }>
        </Button>
      </div>
    );
  }
}

export default FlashCardButton;
