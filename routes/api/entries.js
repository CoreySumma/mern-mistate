// BASE_URL is /api/entry

const express = require('express');
const router = express.Router();
const entryCtrl = require('../../controllers/api/entries');

router.post('/', entryCtrl.create);

module.exports = router;

