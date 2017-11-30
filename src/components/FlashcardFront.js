import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import '../App.css';

class FlashcardFront extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 'Hello',
      id: 1
    }
  }

  render() {

    return (
      <Card 
        raised={true}
        header={this.state.id}
        description={this.state.question}
        extra='RED BUTTON || GREEN BUTTON'
      >
      </Card>
    )
  }
}

export default FlashcardFront;