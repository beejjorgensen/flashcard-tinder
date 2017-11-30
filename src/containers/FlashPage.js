import React, { Component } from 'react';
import FlashcardFront from '../components/FlashcardFront';
import FlashcardBack from '../components/FlashcardBack';
import { Reveal, Grid, Button } from 'semantic-ui-react';
import '../App.css';

class FlashPage extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  
  render() {
    return (
      <div className="container">
        <Grid 
          padded={true}
          stretched={true}
        >
          <Grid.Column textAlign="center"> // The grid aligns everything in the middle of the screen
            <Reveal animated='fade' duration={100}> // A semantic UI element, we're using it to 'reveal' the back of the flashcard
              <Reveal.Content visible>
                <FlashcardFront />
              </Reveal.Content>
              <Reveal.Content>
                <FlashcardBack />
              </Reveal.Content>
            </Reveal>
          </Grid.Column>
          <Grid.Column textAlign="center">
        </Grid.Column>
        </Grid>
        <div className="buttonField"> // These buttons aren't doing anything right now, just there FPO
          <Button color="green">Like It</Button>
          <Button color="red">Hate It</Button>
        </div>
      </div>
    )
  }
}

export default FlashPage;