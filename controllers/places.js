const express = require('express')
// const app = express()
const router = require('express').Router()

//Get Places Index
router.post('/',(req,res)=>{ 
    console.log(req.body)
    res.send('POST /places')
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