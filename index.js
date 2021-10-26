const express = require('express')
const formidable = require('formidable');
const mongoose = require('mongoose');
const app = express()
require('dotenv').config();
/* 
//routes first example (mv)
const homeRoute = require('./routes/routes1/homeRoutes')
const galleryRoute = require('./routes/routes1/galleryRoutes')
const contactRoute = require('./routes/routes1/contactRoutes')
*/

//routes second example (mvc)
const homeRoute = require('./routes/routes2/homeRoutes')
const galleryRoute = require('./routes/routes2/galleryRoutes')
const contactRoute = require('./routes/routes2/contactRoutes')

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

app.use('/', homeRoute)
app.use('/gallery', galleryRoute)
app.use('/contacts', contactRoute)