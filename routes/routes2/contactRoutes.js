const express = require('express');
const router = express.Router()
const contactController = require('../../controllers/contactController')

router.get('/', contactController.contact_all)
router.get('/new', contactController.contact_new)
router.post('/new', contactController.contact_add_new)
router.get('/update/:id', contactController.contact_update)
router.get('/delete/:id', contactController.contact_delete)
router.get('/:id', contactController.contact_find_id)

module.exports = router;