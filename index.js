// Modules and Globals
require('dotenv').config()
const express = require('express')
// const methodOverride = require('method-override')
const app = express()

// Express Settings
// app.set('views',`${__dirname}/views`)
app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
// app.use(methodOverride('_method'))


//Controllers & Routers
app.use('/places', require('./controllers/places'))

//Get Index
app.get('/', (req,res)=>{
    res.render('home')
})
//Get Places
app.get('/places', (req,res)=>{
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/Thai.jpeg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/CodingCat.jpeg'
      }]
      
    res.render('places/index',{places})
})
//Get Default 404
app.get('*', (req,res)=>{
    res.render('error404')
})
app.listen(process.env.PORT)