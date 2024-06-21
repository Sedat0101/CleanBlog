const express = require('express')
const path = require('path')
const ejs = require('ejs')

const app = express()

// TEMPLATE ENGINE
app.set("view engine", "ejs")

// MIDDLEWARE
app.use(express.static('public'))


// ROUTES
app.get('/', (rep, res) => {
    //res.sendFile(path.resolve('temp','index.html'))
    res.render("index")
})

app.get('/about', (rep, res) => {
    res.render("about")
})

app.get('/add_post', (rep, res) => {
    res.render("add_post")
})


const port = 3000
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`)
})