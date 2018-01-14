import axios from 'axios';

export const FETCH_FLASHCARDS = 'fetch_flashcards';
export const FETCH_USER = 'fetch_user';

const ROOT_URL = 'http://localhost:5000';

export const fetchCards = () => {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/api/cards`)
    .then((data) => {
      dispatch ({
        type: FETCH_FLASHCARDS,
        payload: data
      });
    });
}
  
}

export const fetchUser = () => async dispatch => {
  const res = await axios.get(`${ROOT_URL}/api/current_user`, {
    withCredentials: true
  });
  console.log('RES INSIDE ACTIONS.JS', res);

  dispatch({ type: FETCH_USER, payload: res.data });
};


