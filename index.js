// Modules and Globals
require('dotenv').config()
const express = require('express')
const places = require('./models/places.js')
const app = express()
const methodOverride = require('method-override')

// Express Settings
// app.set('views',`${__dirname}/views`)
app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


//Controllers & Routers
app.use('/places', require('./controllers/places'))

//Get Index
app.get('/', (req,res)=>{
    res.render('home')
})
//Get Places
// app.get('/places', (req,res)=>{
//     res.render('places/index',{places})
// })
//Get Default 404
app.get('*', (req,res)=>{
    res.render('error404')
})
app.listen(process.env.PORT)