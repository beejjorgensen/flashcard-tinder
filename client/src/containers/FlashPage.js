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

    // this.state = {
    //   cards: [],
    //  currentCard: {}
    // };

    this.updateCard = this.updateCard.bind(this);
  }

  // componentWillMount() {
  //   const currentCards = this.props.cards;
  //   console.log(">>>>>>>>CWM CURRENTCARDS", currentCards);
    

  //   this.setState({
  //     cards: currentCards,
  //     currentCard: this.getRandomCard(currentCards)
  //   })
  //   console.log('CurrentCard', currentCards);
  // }

  getRandomCard(currentCards) {
    const card = currentCards[Math.floor(Math.random() * currentCards.length)]
    // console.log('GET RANDOM CARD', card);
    return(card);
  }

  updateCard() {
    const currentCards = this.props.cards;
    // console.log('UPDATECARDS : >>>', currentCards);
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  
  }
  // console.log('CURRENT CARD', currentCard);
  
  
  render() {
    // console.log('CURRENT CARD', this.state.currentCard);
    // let x = this.props.cards[5];
    // console.log('BEEJ PROPS', this.props);
    // console.log('CARDS PLEASE', JSON.stringify(x, null, 4));
    // console.log('>>>CARDSPLZ 2', typeof(x));
    return (
      <div className="App">
        <FixedMenu inverted />
        <div className='cardRow'>
          <FlashCard front={this.props.cards[5]}
                     back={this.props.cards[5]} 
          />
        </div>
        <div className='buttonRow'>
          <DrawButton drawCard={this.updateCard} />
        </div>
        <Popup trigger={<Icon name='info circle' size='large' inverted style={ { padding: '0 0 0 0', margin: '0 auto' } }/>} flowing hoverable>
            <Grid centered divided columns={3}>
              <Grid.Column textAlign='center'>
                <p>Red Button removes card from consideration</p>
              </Grid.Column>
              <Grid.Column textAlign='center'>
                <p>Yellow Button keeps card at same pace</p>
              </Grid.Column>
              <Grid.Column textAlign='center'>
                <p>Green Button shows card more frequently</p>
              </Grid.Column>
            </Grid>
          </Popup>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  console.log('FlashPage MAPSTATETOPROPS', state);
  return {cards: state.cards}
}
export default connect(mapStateToProps)(FlashPage);

