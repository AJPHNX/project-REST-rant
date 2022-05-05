require('dotenv').config()
const express = require('express')


const app = express()

app.get('/', (req,res)=>{
    res.send('Hello, World...')
})

app.get('*', (req,res)=>{
    res.status(404).send(`<div><h1>404</h1></br>Sorry Mine. THIS ↴....ain't a sight</div>`)
})
app.listen(process.env.PORT)