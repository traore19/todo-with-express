const mongoose = require('mongoose');
// const schema = mongoose.Schema;
const { Schema } = mongoose;

// create schema
const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  complete: {
    type: Boolean,
  },
});

mongoose.model('todo', TodoSchema);
