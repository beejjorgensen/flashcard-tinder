import React, { Component } from 'react';
import FlashcardFront from '../components/FlashcardFront';
import FlashcardBack from '../components/FlashcardBack';
import { Reveal, Grid } from 'semantic-ui-react';
import '../App.css';

class FlashPage extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  
  render() {
    return (
      <Grid 
        padded={true}
        textAlign="center"
        verticalAlign="middle"
        horizontalAlign="middle"
        container={true}
      >
        <Grid.Column 
          textAlign="center"
          verticalAlign="middle"
          horizontalAlign="middle"
        >
          <Reveal animated='fade'>
            <Reveal.Content visible>
              <FlashcardFront />
            </Reveal.Content>
            <Reveal.Content>
              <FlashcardBack />
            </Reveal.Content>
          </Reveal>
        </Grid.Column>
      </Grid>
    )
  }
}

export default FlashPage;