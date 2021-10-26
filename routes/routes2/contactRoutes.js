const express = require('express');
const router = express.Router()
const Contact = require('../../models/contact')
const formidable = require('formidable');


router.get('/', function (req, res) {
    Contact.find().then(results => {
        console.log(results)
        res.render('contacts/index', { results })
    }).catch(err => console.log(err))

})
router.get('/new', function (req, res) {
    res.render('contacts/new')

})
router.post('/new', (req, res, next) => {
    const form = formidable({ multiples: true, uploadDir: './uploads', keepExtensions: true });

    form.parse(req, (err, fields, files) => {
        if (err) {
            console.log(err)
            next(err);
            return;
        }

        let newContact = new Contact({
            first_name: fields.first_name,
            first_name: fields.last_name,
            email: fields.email,
        })
        newContact.save()
            .then(result => {
                console.log(result)
                res.redirect('/contacts')
            })
            .catch(err => console.log(err))

        // res.json({ fields, files });
    });
});
router.get('/update/:id', function (req, res) {
    res.json(req.params.id)
})
router.get('/delete/:id', function (req, res) {
    res.json(req.params.id)
})
router.get('/:id', function (req, res) {
    Contact.findById(req.params.id).then(result => {
        console.log(result)
        res.json(result)
    }).catch(err => console.log(err))
})

module.exports = router;