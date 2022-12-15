const Entry = require('../../models/entrySchema');

module.exports = {
  create,
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