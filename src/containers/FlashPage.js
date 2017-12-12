import React, { Component } from 'react';
import FlashcardFront from '../components/FlashcardFront';
import FlashcardBack from '../components/FlashcardBack';
import FlashCardButton from '../components/FlashcardButton';
import { Reveal, Grid } from 'semantic-ui-react';
import '../App.css';

import { connect } from 'react-redux';
import { fetchCards } from '../actions/index';

class FlashPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.fetchCards();
    // console.log("Flashpage props" + this.props.fetchCards());
  }

  render() {
    return (
      <div className="flashPage">
        <Grid
          padded={true}
          stretched={true}
        >
          {/* The grid aligns everything in the middle of the screen */}
          <Grid.Column textAlign="center">
            {/* // A semantic UI element, we're using it to 'reveal' the back of the flashcard */}
            <Reveal animated='fade' duration={100}>
              <Reveal.Content visible>
                <FlashcardFront cards={this.props.cards}/>
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
          <FlashCardButton />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { cards: state.cards };
}

export default connect(mapStateToProps, { fetchCards })(FlashPage);