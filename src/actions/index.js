import axios from 'axios';

export const FETCH_FLASHCARDS = 'fetch_flashcards';

const ROOT_URL = 'http://localhost:8080';

export const fetchCards = () => {
  const request = axios.get(`${ROOT_URL}/cards`)

  return {
    type: FETCH_FLASHCARDS,
    payload: request
  };
}
