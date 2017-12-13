// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const Card = require('./cardModel.js');

// const cors = require('cors');
// const server = express();
// server.use(bodyParser.json());
// const corsOptions = {
//   "origin": "http://localhost:3000",
//   "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
//   "preflightContinue": true,
//   "optionsSuccessStatus": 204,
//   "credentials": true // enable set cookie
// };
// server.use(cors(corsOptions));

// server.post('/cards', (req, res) => {
//   const { _id, frontCard, backCard } = req.body;
//   const card = new Card({_id, frontCard, backCard});
//   card.save((err, newCard) => {
//     if (err) return res.send(err);
//     res.json(newCard)
//   });
// });

// server.get('/cards', (req, res) => {
//   console.log('Hello from server.get /cards route!');
//   Card.find({}, (err, card) => {
//     console.log(card);
//     if (err) return res.send(err);
//     res.json(card);
//   });
// });

// mongoose.connect('mongodb://localhost/cardsTest', {useMongoClient: true}, (err) => {
//   if (err) return console.log(err);
//   console.log('Connected to FlashCards DataBase!');
// });

// server.listen(8080, (err) => {
//   if (err) return console.log('ERROR port 8080');
//  console.log('FlashCard Server Listening On Port 8080');
// });