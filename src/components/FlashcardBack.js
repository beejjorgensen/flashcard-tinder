import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import '../App.css';

class FlashcardBack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: 'World',
      id: 1
    }
  }
  
  render() {
    return (
      <Card
        header={this.state.id}
        description={this.state.answer}
        extra='RED BUTTON || GREEN BUTTON'
      >
      </Card>
    )
  }
}

export default FlashcardBack;