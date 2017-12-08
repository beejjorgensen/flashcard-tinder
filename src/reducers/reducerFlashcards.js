import { FETCH_FLASHCARDS } from '../actions';

export default function(state = [], action) {
  // console.log('Action received', action);
  switch (action.type) {
    case FETCH_FLASHCARDS:
      // console.log(action.payload.data);
      return state.concat([action.payload.data]);
  default:
    return state;
  }
}