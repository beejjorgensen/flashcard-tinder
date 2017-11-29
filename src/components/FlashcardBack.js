import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import '../App.css';

class FlashcardBack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: 'World',
    }
  }
  
  render() {
    return (
      <Card className="flashcard">
        <Card.Content>
          {this.state.answer}
        </Card.Content>
      </Card>
    )
  }
}

export default FlashcardBack;