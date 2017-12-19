import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import '../App.css';

import axios from 'axios';
import { connect } from 'react-redux';

// Displays the front text of the flashcard
class FlashcardFront extends Component {
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
    const cards = this.state.cards.map(card => {
      return <div key={card._id}>{card.frontCard}</div>
    });
    return (
      <div>
        <Card className="flashcard" raised={true}>
          <Card.Header>
            Card Number: 1
          </Card.Header>
          <Card.Content extra>
            {cards}
            {console.log('JSX Return statement', cards)}
          </Card.Content>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ cards }) {
  console.log('mapStateToProps state', cards);
  return { cards }
}

export default connect(mapStateToProps)(FlashcardFront);