import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlashCard from './FlashCard';
import DrawButton from '../components/FlashcardButton';
import FixedMenu from './FixedMenu';
import { Icon, Popup, Grid } from 'semantic-ui-react';
import '../App.css';
import '../style.css';

class FlashPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.cards[0] !== nextProps.cards[0]) {
      const currentCard =
        nextProps.cards[Math.floor(Math.random() * nextProps.cards.length)];
      this.setState(prevState => {
        return {
          currentCard
        };
      });
    }
  }

  updateCard = () => {
    console.log('Clicked Current Card', this.props.cards);
    const currentCard = this.props.cards[
      Math.floor(Math.random() * this.props.cards.length)
    ];
    this.setState(_ => {
      return {
        currentCard
      };
    });
  };
  render() {
    // console.log('CURRENT CARD', this.state.currentCard);
    // let x = this.props.cards[5];
    // console.log('BEEJ PROPS', this.props);
    // console.log('CARDS PLEASE', JSON.stringify(x, null, 4));
    // console.log('>>>CARDSPLZ 2', typeof(x));
    const { currentCard } = this.state;
    return (
      <div className="App">
        <FixedMenu inverted />
        <div className="cardRow">
          <FlashCard front={currentCard} back={currentCard} />
        </div>
        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard} />
        </div>
        <Popup
          trigger={
            <Icon
              name="info circle"
              size="large"
              inverted
              style={{ padding: '0 0 0 0', margin: '0 auto' }}
            />
          }
          flowing
          hoverable
        >
          <Grid centered divided columns={3}>
            <Grid.Column textAlign="center">
              <p>Red Button removes card from consideration</p>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <p>Yellow Button keeps card at same pace</p>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <p>Green Button shows card more frequently</p>
            </Grid.Column>
          </Grid>
        </Popup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('FlashPage MAPSTATETOPROPS', state);
  return { cards: state.cards };
};
export default connect(mapStateToProps)(FlashPage);
