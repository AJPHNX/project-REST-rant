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
  // _id: {type: mongoose.Schema.Types.ObjectId}, //required: true},
  name: { type: String, required: true, default:'undefined name'},
  pic: {type:String, default:'http://placekitten.com/350/350'},
  cuisines: { type: String, required: true, default:'undefined Food'},
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673,'Lets rethink this. When?'],
    max: [new Date().getFullYear(),'We must first be present to explore the future.']
  },
  comments:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)

