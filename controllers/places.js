const express = require('express')
const app = express()
const router = require('express').Router()

//--------Get places
// router.get('/',(req,res)=>{
//     res.render('places/index')
// })
app.get('/',(req,res)=>{ 
    res.render('places/index')
})

module.exports = router