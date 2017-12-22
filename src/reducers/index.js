import { combineReducers } from 'redux';
import CardsReducer from './reducerFlashcards';

const rootReducer = combineReducers({
  cards: CardsReducer
});

export default rootReducer;