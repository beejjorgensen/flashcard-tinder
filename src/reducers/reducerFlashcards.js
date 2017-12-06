import { FETCH_FLASHCARDS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_FLASHCARDS:
    console.log(action.payload.data);
  default:
    return state;
  }
}