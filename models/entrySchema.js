const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  title: {type: String, required: true},
  text: {type: String, required: true},
  emotion: {type: String, required: true},
  day: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
  timestamps: true
});

module.exports = mongoose.model('Entry', entrySchema);