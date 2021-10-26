const express = require('express');
const router = express.Router();
const galleryController = require('../routes2/galleryController')
const Art = require('../../models/art')
const formidable = require('formidable');


router.get('/', function (req, res) {
    Art.find().then(results => {
        console.log(results)
        res.render('gallery/index', { results })
    }).catch(err => console.log(err))

})
router.get('/new', function (req, res) {
    res.render('gallery/new')

})
router.post('/new', (req, res, next) => {
    const form = formidable({ multiples: true, uploadDir: './uploads', keepExtensions: true });

    form.parse(req, (err, fields, files) => {
        if (err) {
            console.log(err)
            next(err);
            return;
        }

        let newArtWotrk = new Art({
            title: fields.title,
            artist: fields.artist,
            path_image: files.file.path.slice('uploads'.length)
        })
        newArtWotrk.save()
            .then(result => {
                console.log(result)
                res.redirect('/gallery')
            })
            .catch(err => console.log(err))

        // res.json({ fields, files });
    });
});
router.get('/update/:id', function (req, res) {
    res.json(req.params.id)
})
router.get('//delete/:id', function (req, res) {
    res.json(req.params.id)
})
router.get('/:id', function (req, res) {
    Art.findById(req.params.id).then(result => {
        console.log(result)
        res.json(result)
    }).catch(err => console.log(err))
})

module.exports = router;