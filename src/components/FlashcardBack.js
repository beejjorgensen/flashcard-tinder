import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import flashCardData from '../application_data';
import '../App.css';

// Displays the back 'hidden' text of the flashcard
class FlashcardBack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      answer: [],

    }
  }
  
  render() {
    const flashCard = flashCardData[0];
    return (
      <div>
      <Card className="flashcard">
        <Card.Header className='flash-head'>
          Card Number: {this.state.id}
        </Card.Header>
        <Card.Description>
          {this.state.answer}
        </Card.Description>
        <Card.Content extra>
          {flashCard.answer}
          {/* <p>array.splice(start)<br /><br />
             array.splice(start, deleteCount)<br /><br />
             array.splice(start, deleteCount, item1, item2, ...)</p> */}
        </Card.Content>
      </Card>
      </div>
    )
  }
}

export default FlashcardBack;