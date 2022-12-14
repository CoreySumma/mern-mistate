const Schema = require('mongoose').Schema;

const entrySchema = new Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  emoji: {type: String, required: true},
  day: {type: String, required: true}
}, {
  timestamps: true
});

module.exports = entrySchema;