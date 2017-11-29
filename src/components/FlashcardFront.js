import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import '../App.css';

class FlashcardFront extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 'Hello',
    }
  }

  render() {

    return (
      <Card className="flashcard">
        <Card.Content>
          {this.state.question}
        </Card.Content>
      </Card>
    )
  }
}

export default FlashcardFront;