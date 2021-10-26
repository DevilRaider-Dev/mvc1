const Contact = require('../models/contact')
const formidable = require('formidable')

const contact_all = (req, res) => {
    Contact.find().then(results => {
        console.log(results)
        res.render('contacts/index', { results })
    }).catch(err => console.log(err))
}

const contact_new = (req, res) => {
    res.render('contacts/new')
}

const contact_add_new = (req, res) => {
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
}

const contact_update = (req, res) => {
    res.json(req.params.id)
}

const contact_delete = (req, res) => {
    res.json(req.params.id)
}

const contact_find_id = (req, res) => {
    Contact.findById(req.params.id).then(result => {
        console.log(result)
        res.json(result)
    }).catch(err => console.log(err))
}

module.exports = {
    contact_all,
    contact_new,
    contact_add_new,
    contact_update,
    contact_delete,
    contact_find_id
}