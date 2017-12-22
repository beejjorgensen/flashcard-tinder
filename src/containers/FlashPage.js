import React from 'react';
import FlashcardFront from '../components/FlashcardFront';
import FlashcardBack from '../components/FlashcardBack';
import { Reveal, Grid, Button, Card } from 'semantic-ui-react';
import '../App.css';

import { connect } from 'react-redux';
import { fetchCards } from '../actions/index';
import FlashcardButton from '../components/FlashcardButton';

export const FlashCard = (props) => (
  <div className='card-container'>
    <div className='card'>
      <div className='front'>
        <div className='frontCard'>{props.front}</div>
      </div>
      <div className='back'>
        <div className='backCard' >{props.back}</div>
      </div>
    </div>
  </div>
);