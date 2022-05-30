// const places = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '/images/Thai.jpeg'
//   }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/CodingCat.jpeg'
//   }]

//   module.exports = places
const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true, default:'undefined name'},
  pic: {type:String,default:'http://placekitten.com/400/400'},
  cuisines: { type: String, required: true, default:'undefined Food'},
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {type:Number}
})

module.exports = mongoose.model('Place', placeSchema)

