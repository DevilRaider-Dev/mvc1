const mongoose = require('mongoose');

const artSchema = mongoose.Schema({
    title: String,
    artist: String,
    path_image: String
})

const Art = mongoose.model('artDbs', artSchema)

module.exports = Art