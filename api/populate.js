const fs = require('fs');
const Card = require('./cardModel.js');

let savedCards = null;

const getFlashcards = () => {
  if (!savedCards) {
    const contents = fs.readFileSync('flashCards.json', 'utf8');
    savedCards = JSON.parse(contents);
  }
  return savedCards;
};

const populateCards = () => {
  const cards = getFlashcards();
  const promises = cards.map(card => new Card(card).save());
  return Promise.all(promises);
};

module.exports = { getFlashcards, populateCards };