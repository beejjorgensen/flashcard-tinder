import axios from 'axios';

export const FETCH_FLASHCARDS = 'fetch_flashcards';
export const FETCH_USER = 'fetch_user';

export const fetchCards = () => {
  return (dispatch) => {
    axios.get('/api/cards')
    .then((data) => {
      dispatch ({
        type: FETCH_FLASHCARDS,
        payload: data
      });
    });
  }
}

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  console.log('RES INSIDE ACTIONS.JS', res);

  dispatch({ type: FETCH_USER, payload: res.data });
};

