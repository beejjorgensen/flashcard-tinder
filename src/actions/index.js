import axios from 'axios';

export const FETCH_FLASHCARDS = 'fetch_flashcards';
export const FETCH_USER = 'fetch_user';

const ROOT_URL = 'http://localhost:3001';

export const fetchCards = () => {
  const request = axios.get(`${ROOT_URL}/cards`)

  return {
    type: FETCH_FLASHCARDS,
    payload: request
  };
}

export const fetchUser = () => async dispatch => {
  const res = await axios.get(`/api/current_user`);

  dispatch({ type: FETCH_USER, payload: res.data });
};


