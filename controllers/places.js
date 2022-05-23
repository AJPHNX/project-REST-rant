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
//Get Show Place by Id
router.get('/:id',(req,res)=>{
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }else if(!places[id]){
    res.render('error404')
  }else{
    res.render('places/show',{place: places[id],id : id})
    // console.log(places[id])
    // console.log(id)
  }
})
//Delete Route
router.delete('/:id',(req,res)=>{
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
    // console.log(`splicing: ${id}`)
  }else if(!places[id]){
    res.render('error404')
  }else{
    console.log(id)
    places.splice(id,1)
    
    // res.send('STUB DELETE places/:id')
    res.redirect('/places')
    // res.redirect
    // console.log(id)
  }
})

module.exports = router