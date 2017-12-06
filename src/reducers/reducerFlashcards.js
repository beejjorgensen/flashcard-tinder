import { FETCH_FLASHCARDS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_FLASHCARDS:
    console.log(action.payload.data);
    break; // will change this to return *lodash to map over objects (action.payload.data, id);
  default:
    return state;
  }
}