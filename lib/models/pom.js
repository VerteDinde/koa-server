const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  speed: {
    type: String,
    enum: ['fast', 'slow', 'super fast', 'Desisa']
  }
});

module.exports = mongoose.model('Pom',schema);