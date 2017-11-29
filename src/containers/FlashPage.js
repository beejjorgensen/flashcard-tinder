import React, { Component } from 'react';
import FlashcardFront from '../components/FlashcardFront';
import FlashcardBack from '../components/FlashcardBack';
import { Reveal, Container } from 'semantic-ui-react';
import '../App.css';

class FlashPage extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  
  render() {
    return (
      <Container 
        className="container"
        textAlign="center"
      >
        <Reveal animated='small fade'>
          <Reveal.Content visible={true}>
            <FlashcardFront />
          </Reveal.Content>
          <Reveal.Content hidden={true}>
            <FlashcardBack />
          </Reveal.Content>
        </Reveal>
      </Container>
    )
  }
}

export default FlashPage;