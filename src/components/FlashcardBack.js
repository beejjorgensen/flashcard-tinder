import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import flashCardData from '../application_data';
import '../App.css';

import axios from 'axios';
import { connect } from 'react-redux';

// Displays the back 'hidden' text of the flashcard
class FlashcardBack extends Component {
  state = {
    cards: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/cards')
      .then(response => {
        this.setState({ cards: response.data });
        console.log("componentDidMount", response);
      });
  }

  render() {
    // const flashCard = flashCardData[0];
    const cards = this.state.cards.map(card => {
      return <div key={card._id}>{card.backCard}</div>
    });
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
          {cards}
        </Card.Content>
      </Card>
      </div>
    )
  }
}

function mapStateToProps({ cards }) {
  console.log('mapStateToProps state', cards);
  return { cards }
}

export default connect(mapStateToProps)(FlashcardBack);