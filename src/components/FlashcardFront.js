import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import flashCardData from '../application_data';
import '../App.css';

// Displays the front text of the flashcard
class FlashcardFront extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: [],
      id: 1
    }
  }

  render() {
    const flashCard = flashCardData[0];
    return (
      <div>
        <Card className="flashcard" raised={true}>
          <Card.Header>
            Card Number: {this.state.id}
          </Card.Header>
          <Card.Description>
            {this.state.question}
          </Card.Description>
            {flashCard.question}
        </Card>
      </div>
    )
  }
}

export default FlashcardFront;