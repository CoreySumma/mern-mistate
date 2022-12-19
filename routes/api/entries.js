// BASE_URL is /api/entries

const express = require('express');
const router = express.Router();
const entryCtrl = require('../../controllers/api/entries');

router.get('/', entryCtrl.index);
router.post('/new', entryCtrl.create);
router.put('/update/:id'), entryCtrl.updateEntry
router.delete('/:id', entryCtrl.delete);

module.exports = router;

