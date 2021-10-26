const Art = require('../models/art')
const formidable = require('formidable');

const gallery_all = (req, res) => {
    Art.find().then(results => {
        console.log(results)
        res.render('gallery/index', { results })
    }).catch(err => console.log(err))
}

const gallery_new = (req, res) => {
    res.render('gallery/new')
}

const gallery_add_new = (req, res, next) => {
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
}

const gallery_update_id = (req, res) => {
    res.json(req.params.id)
}
const gallery_delete_id = (req, res) => {
    res.json(req.params.id)
}
const gallery_find_id = (req, res) => {
    Art.findById(req.params.id).then(result => {
        console.log(result)
        res.json(result)
    }).catch(err => console.log(err))
}

module.exports = {
    gallery_all,
    gallery_new,
    gallery_add_new,
    gallery_update_id,
    gallery_delete_id,
    gallery_find_id
}