const express = require('express')
const app = express()
const router = require('express').Router()

//Get Places New
router.get('/new',(req,res)=>{ 
    res.render('places/new')
})
//Get Places Id
app.get('/:id',(req,res)=>{ 
    res.render('places/:id')
})
//Get Places Index
app.get('/',(req,res)=>{ 
    res.render('places/index')
})


module.exports = router