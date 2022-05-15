// const express = require('express')
// const app = express()
const router = require('express').Router()
const places = require('../models/places.js')

//Get Places Index
router.post('/',(req,res)=>{ 

    // console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
        req.body.city = 'Anytown'
      }
      if (!req.body.state) {
        req.body.state = 'USA'
      }
    places.push(req.body)
    res.redirect('/places')
    // res.render('places/index')
})


//Get Places New
router.get('/new',(req,res)=>{ 
    res.render('places/new')
})
//Get Places Id
router.get('/:id',(req,res)=>{ 
    res.render('places/:id')
})

module.exports = router