const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const server = express();

server.get('/cards', (req, res) => {
  console.log('Hello from server.get /cards route!');
  Card.find({}, (err, post) => {
    console.log(card);
    if (err) return res.send(err);
    res.json(post);
  });
});

mongoose.connect('mongodb://localhost/cardsTest', {useMongoClient: true}, (err) => {
  if (err) return console.log(err);
  console.log('Connected to FlashCards DataBase!');
});

server.listen(8080, (err) => {
  if (err) return console.log('ERROR port 8080');
 console.log('FlashCard Server Listening On Port 8080');
});