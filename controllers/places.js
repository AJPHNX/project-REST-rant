const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', {places})
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})
//Get Places Index
router.post('/',(req,res)=>{ 
  
    // if (!req.body.pic) {req.body.pic = 'http://placekitten.com/400/400'}
    // if (!req.body.city) {req.body.city = 'Anytown'}
    // if (!req.body.state) {req.body.state = 'USA'}
    db.Place.create(req.body)
      .then(() =>{
        res.redirect('/places')
      })
      .catch(err => {
        if (err && err.name == 'ValidationError'){
          let message = 'Validation Error:'
          //TODO: Generate error message(s)
          res.render('places/new',{message})
        }
        else{
          console.log('err',err) 
          res.render('error404')
        }
      })   
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})



router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

/*
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
  }
})

//Put Route
router.put('places/:id',(req,res)=>{
  let id = Number(req.params.id)
  console.log(`id`)
  console.log(id)
  // if (isNaN(id)) {
  //   res.render('error404')
  // }else if(!places[id]){
  //   res.render('error404')
  // }else{
  //   if (!req.body.pic) {
  //     // Default image if one is not provided
  //     req.body.pic = 'http://placekitten.com/400/400'
  //   }
  //   if (!req.body.city) {
  //     req.body.city = 'Anytown'
  //   }
  //   if (!req.body.state) {
  //     req.body.state = 'USA'
  //   }
    places[id] = req.body
    console.log(`req.body`)
    console.log(req.body)
    
    res.redirect(`./${id}`)
  // }
})

//Edit Route
router.get('/:id/edit',(req,res)=>{
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }else if(!places[id]){
    res.render('error404')
  }else{
    res.render(`places/edit`,{place: places[id],id:id})
  }
})

//Delete Route
router.delete('/:id',(req,res)=>{
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
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
*/
module.exports = router