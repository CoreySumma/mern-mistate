// BASE_URL is /api/entries
const ensureLoggedIn = require('../../config/ensureLoggedIn')

const express = require('express');
const router = express.Router();
const entryCtrl = require('../../controllers/api/entries');

router.get('/', entryCtrl.index);
router.get('/:id', entryCtrl.showEveryone);
router.post('/new', entryCtrl.create);
router.put('/:id/update', entryCtrl.updateEntry);
router.delete('/:id', ensureLoggedIn, entryCtrl.delete);
router.delete('/', ensureLoggedIn, entryCtrl.deleteAll);

module.exports = router;

