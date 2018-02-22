//db
const db = require('./models')
//models
const Photo = db.model('photo')
const Bedroom = db.model('bedroom')
const Livingroom = db.model('livingroom')
const Product = db.model('product')
//bluebird
const Promise = require('bluebird');


const allphotos = [
  {type: 'kitchen', url: '/Users/eunjisong/Documents/personal work/cheng/public/photos/bc1.jpg'},
  {type: 'livingroom', url: '/Users/eunjisong/Documents/personal work/cheng/public/photos/bc3.jpg'},
  {type: 'kitchen', url: '/Users/eunjisong/Documents/personal work/cheng/public/photos/bc2.jpg'},
  {type: 'bathroom', url: '/Users/eunjisong/Documents/personal work/cheng/public/photos/bc4.jpg'},
  {type: 'bedroom', url: '/Users/eunjisong/Documents/personal work/cheng/public/photos/bc5.jpg'},
  {type: 'bedroom', url: '/Users/eunjisong/Documents/personal work/cheng/public/photos/bc6.jpg'},
  {type: 'livingroom', url: '/Users/eunjisong/Documents/personal work/cheng/public/photos/bc7.jpg'},
  {type: 'kitchen', url: '/Users/eunjisong/Documents/personal work/cheng/public/photos/bc8.jpg'},
  {type: 'office', url: '/Users/eunjisong/Documents/personal work/cheng/public/photos/okl1.jpg'},
  {type: 'office', url: '/Users/eunjisong/Documents/personal work/cheng/public/photos/okl2.jpg'},
  {type: 'office', url: '/Users/eunjisong/Documents/personal work/cheng/public/photos/okl3.jpg'},
  {type: 'office', url: '/Users/eunjisong/Documents/personal work/cheng/public/photos/okl4.jpg'},
  {type: 'office', url: '/Users/eunjisong/Documents/personal work/cheng/public/photos/okl5.jpg'}
]

const seed = () => {
  Promise.map(allphotos, photo => {
    return Photo.create(photo)
  })
}

db.sync()
  .then( () => {
    console.log('Seeding database...')
    return seed();
  })
  .then( () => {
    console.log('seeded successfully!!')
  })
  .catch(console.error);
