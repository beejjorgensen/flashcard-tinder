import React, { Component } from 'react';
import FlashcardFront from '../components/FlashcardFront';
import FlashcardBack from '../components/FlashcardBack';
import FlashcardButton from '../components/FlashcardButton';
import { Reveal, Grid } from 'semantic-ui-react';
import '../App.css';

class FlashPage extends Component {
  constructor(props) {
    super(props);
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
          {/* The grid aligns everything in the middle of the screen */}
          <Grid.Column textAlign="center"> 
          {/* // A semantic UI element, we're using it to 'reveal' the back of the flashcard */}
            <Reveal animated='fade' duration={100}> 
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
        <div>
        {/* These buttons aren't doing anything right now, just there FPO */}
          {/* <Button color="green">Like It</Button>
          <Button color="red">Hate It</Button> */}
          <FlashcardButton />
        </div>
      </div>
    )
  }
}

export default FlashPage;