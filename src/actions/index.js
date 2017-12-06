import axios from 'axios';

const FETCH_FLASHCARDS = 'fetch_flashcards';

ROOT_URL = 'http://serverNameHere.herokuapp.com/'

export function fetchCards() {
  const request = axios.get(`${ROOT_URL}/flashpage`)
  return {
    type: FETCH_FLASHCARDS,
    payload: request
  };
}