const express = require('express')
const path = require('path')
const ejs = require('ejs')
const Photo = require('./models/photo')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/blog-test-db')

// TEMPLATE ENGINE
app.set("view engine", "ejs")

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


// ROUTES
app.get('/', async (req, res) => {
    //res.sendFile(path.resolve('temp','index.html'))
   const photos = await Photo.find({})
    res.render("index", {
        photos
    })
})

app.get('/about', (req, res) => {
    res.render("about")
})

app.get('/add_post', (req, res) => {
    res.render("add_post")
})

app.post('/photos', async (req, res) => {
    await Photo.create(req.body)
    res.redirect("/")
})


const port = 3000
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`)
})