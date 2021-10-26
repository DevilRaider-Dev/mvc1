const express = require('express')
const router = express.Router()
const galleryController = require('../../controllers/galleryController')

router.get('/', galleryController.gallery_all)
router.get('/new', galleryController.gallery_new)
router.post('/new', galleryController.gallery_add_new);
router.get('/update/:id', galleryController.gallery_update_id)
router.get('/delete/:id', galleryController.gallery_delete_id)
router.get('/:id', galleryController.gallery_find_id)


module.exports = router