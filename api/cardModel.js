const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  frontCard: {
    type: String,
    required: true,
  },
  backCard: {
    definition : { 
      type: String, 
      required: true, 
    }, 
    example : { 
      type: String, 
      required: true, 
    }, 
    syntax : { 
      type: String, 
      required: true, 
    }, 
    required: true,
  },
});

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;