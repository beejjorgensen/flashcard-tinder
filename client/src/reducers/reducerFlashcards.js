import { FETCH_FLASHCARDS } from '../actions/types';

const init = { cards: [{frontCard: 'front', backCard: 'back'}]};

export default function(state = init, action) {
  // console.log('Action received', action);
  switch (action.type) {
    case FETCH_FLASHCARDS:
      // action.payload.then((r) => console.log('GOATS: ', r));
      console.log('FLASH REDUCER action.payload', action.payload);
      return action.payload;
      // state.concat([action.payload.data]);

  default:
    return state;
  }
}

