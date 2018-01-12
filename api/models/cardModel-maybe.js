const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const CardSchema = new Schema({
  ID: {
    type: Number,
    required: true,
  },
  FrontCard: {
    type: String,
    required: true,
  },
  BackCard: {
    type: String, 
    required: true,
  },
}); 

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;