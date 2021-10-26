const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String
})

const Contact = mongoose.model('contactDbs', contactSchema)

module.exports = Contact