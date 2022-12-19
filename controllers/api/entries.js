const Entry = require('../../models/entry');

module.exports = {
  index,
  create,
  delete: deleteEntry
}

async function index(req, res) {
  const entries = await Entry.find({ user: req.user._id });
  res.json(entries)
}

async function create(req, res) {
    req.body.user = req.user._id
  try {
    const entry = await Entry.create(req.body);
    res.json(entry);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteEntry(req, res) {
  req.body.user = req.user._id;
  const entry = await Entry.findByIdAndDelete(req.params.id)
  res.json(entry);
}