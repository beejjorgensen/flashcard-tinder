import React, { Component } from 'react';
import FlashcardFront from '../components/FlashcardFront';
import FlashcardBack from '../components/FlashcardBack';
import { Reveal, Grid, Button, Card } from 'semantic-ui-react';
import '../App.css';

import { connect } from 'react-redux';
import { fetchCards } from '../actions/index';

class FlashPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ['JavaScript'],
      frontCard: ['includes()', 'indexOf()', 'slice()'],
      backCard: ['includes() determines whether an array includes a certain element. returns TRUE or FALSE.', 'ndexOf() returns the first index at which a given element can be found in the array. Returns -1 if it is not found.', 'slice() returns a shallow COPY of a portion of an array into a new array object selected from BEGIN (Inclusive) to END (Non-Inclusive). ORIGINAL ARRAY NOT MUTATED.' ]
    }
    this.handleClickGreen = this.handleClickGreen.bind(this);
  }

  handleClickGreen() {
    this.state.frontCard[+1];
  }

  render() {
    return (
      <div className="flashPage">
        <Grid>
          {/* The grid aligns everything in the middle of the screen */}
          <Grid.Column textAlign="center">
            {/* // A semantic UI element, we're using it to 'reveal' the back of the flashcard */}
            <Reveal animated='fade' duration={100}>
              <Reveal.Content visible>
                <Card className="flashcard" raised={true}>
                  <Card.Header>
                    Card Number: 1
                  </Card.Header>
                  <Card.Content extra>
                    {this.state.frontCard[0]}
                  </Card.Content>
                </Card>
              </Reveal.Content>
              <Reveal.Content hidden>
                <Card className="flashcard">
                  <Card.Header>
                    Card Number: 1
                  </Card.Header>
                  <Card.Content extra>
                    {this.state.backCard[0]}
                  </Card.Content>
              </Card>
              </Reveal.Content>
            </Reveal>
          </Grid.Column>
        </Grid>
          <div className='flash-buttons'>
            <Button color='red' circular onClick={this.handleClickRed} style={ { margin: '0 1rem 0 0', height: '5rem', width: '5rem' } }>
            </Button>
            <Button color='yellow' circular onClick={this.handleClickYellow} style={ { margin: '0 1rem 0 1rem', height: '5rem', width: '5rem' } }>
            </Button>
            <Button color='green' circular onClick={this.handleClickGreen} style={ { margin: '0 0 0 1rem', height: '5rem', width: '5rem' } }>
            </Button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { cards: state.cards };
}

export default connect(mapStateToProps, { fetchCards })(FlashPage);