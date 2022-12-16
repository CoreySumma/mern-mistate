// BASE_URL is /api/entry

const express = require('express');
const router = express.Router();
const entryCtrl = require('../../controllers/api/entries');

router.get('/', entryCtrl.index);
router.post('/new', entryCtrl.create);

module.exports = router;

