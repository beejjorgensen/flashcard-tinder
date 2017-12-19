import React, { Component } from 'react';
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
          <Button color='red' circular onClick={this.handleClickRed}>
          </Button>
          <Button color='green' circular onClick={this.handleClickGreen}>
          </Button>
        </div>
      </div>
    );
  }
}

export default FlashCardButton;
