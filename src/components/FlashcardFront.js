import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import '../App.css';

// Displays the front text of the flashcard
class FlashcardFront extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "'Splice' (Array)",
      id: 1
    }
  }

  render() {
    return (
      <div>
        <Card className="flashcard" raised={true}>
          <Card.Header>
            Card Number: {this.state.id}
          </Card.Header>
          <Card.Description>
          {this.state.question}          
          </Card.Description>
        </Card>
      </div>
    )
  }
}

export default FlashcardFront;