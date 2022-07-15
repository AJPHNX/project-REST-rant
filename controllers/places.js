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
  
    if (!req.body.pic) {req.body.pic = 'http://placekitten.com/400/400'}
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
          for (var field in err.errors) {
              message += `${field} was ${err.errors[field].value}. `
              message += `${err.errors[field].message}`
          }
          console.log('Validation error message', message)
          res.render('places/new',{message})
        }
        else{
          console.log('err',err) 
          res.render('error404')
        }
      })   
})
//Post Comment
router.post('/:id/comment', (req, res) => {
  console.log('post comment', req.body)
    if (req.body.author === '') { req.body.author = undefined }
    req.body.rant = req.body.rant ? true : false
    db.Place.findById(req.params.id)
        .then(place => {
            db.Comment.create(req.body)
                .then(comment => {
                    place.comments.push(comment.id)//foundPlace.comments.push(createdComment)
                    place.save()
                        .then(() => {
                            res.redirect(`/places/${req.params.id}`)
                        })
                        .catch(err => {
                            res.render('error404')
                        })
                })
                .catch(err => {
                    res.render('error404')
                })
        })
        .catch(err => {
            res.render('error404')
        })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  let _id = (req.params.id)
  db.Place.findOne({ _id: req.params.id })
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})



router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})
// Edit
router.get('/:id/edit', (req, res) => {
  // let id = {_id:req.params.id}
  // console.log('Edit id:')
  // console.log(typeof id)
  // console.log({_id:req.params.id})

  // console.log(req.params.id)

  db.Place.findById(req.params.id)

        .then(place => {
          // console.log({place})
            res.render('places/edit', { place })
        })
        .catch(err => {
          // console.log({place})
            res.render('error404')
        })
})

router.delete('/:id/rant/:commentId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
  .then(() => {
      console.log('Success')
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
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