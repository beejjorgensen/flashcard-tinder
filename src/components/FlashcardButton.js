import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class DrawButton extends Component {
  constructor(props) {
    super(props);

    this.drawCard = this.drawCard.bind(this);
  }

  drawCard() {
    this.props.drawCard();
  }
  render() {
    return (
      <div className='button-container'>
        <Button color='red' circular onClick={this.drawCard} style={ { margin: '0 1rem 0 0', height: '5rem', width: '5rem' } }>
        </Button>
        <Button color='yellow' circular onClick={this.drawCard} style={ { margin: '0 1rem 0 1rem', height: '5rem', width: '5rem' } }>
        </Button>
        <Button color='green' circular onClick={this.drawCard} style={ { margin: '0 0 0 1rem', height: '5rem', width: '5rem' } }>
        </Button>
      </div>
    )
  }
}

export default DrawButton;
