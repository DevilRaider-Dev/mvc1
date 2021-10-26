const express = require('express')
const formidable = require('formidable');
const app = express()
const mongoose = require('mongoose');
const homeRoute1 = require('./routes/routes1/homeRoutes')
const galleryRoute1 = require('./routes/routes1/galleryRoutes')
const contactRoute1 = require('./routes/routes1/contactRoutes')
const homeRoute2 = require('./routes/routes2/homeRoutes')
const galleryRoute2 = require('./routes/routes2/galleryRoutes')
const contactRoute2 = require('./routes/routes2/contactRoutes')
require('dotenv').config();

//init db connection and port listener
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(3000, () => {
            console.log(`db connected and listening at http://localhost:${3000}`);
        })
    })
    .catch(err => {
        console.error('App starting error:', err.stack);
        process.exit(1)
    });

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.static('uploads'))

//routes example 1
/* app.use('/', homeRoute1)
app.use('/gallery', galleryRoute1)
app.use('/contacts', contactRoute1) */

//routes example 2
app.use('/', homeRoute2)
app.use('/gallery', galleryRoute2)
app.use('/contacts', contactRoute2)