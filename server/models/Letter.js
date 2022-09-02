const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const letterSchema = new Schema({
  letterText: {
    type: String,
    required: 'You need to leave a letter!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  letterAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  responses: [
    {
      responseText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Letter = model('Letter', letterSchema);

module.exports = Letter;
