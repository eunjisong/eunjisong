//db
const db = require('./models');

//models
const Work = db.model('work');
const Artwork = db.model('artwork');
const Coding = db.model('coding');

const Promise = require('bluebird')

const allArtworks = [{ imageUrl: '/Users/eunjisong/Documents/personal work/eunji/public/images/artwork1.jpg'},
                     { imageUrl: '/Users/eunjisong/Documents/personal work/eunji/public/images/artwork2.jpg'},
                     { imageUrl: '/Users/eunjisong/Documents/personal work/eunji/public/images/artwork3.jpg'},
                     { imageUrl: '/Users/eunjisong/Documents/personal work/eunji/public/images/artwork4.jpg'},
                     { imageUrl: '/Users/eunjisong/Documents/personal work/eunji/public/images/artwork5.jpg'}
                    ];

const allCoding = [{ url: 'www.chenglinphoto.com',
                    imageUrl: '/Users/eunjisong/Documents/personal work/eunji/public/images/chenglinphoto.jpg',
                    description: 'Cheng\'s portfoilo!' },
                    { url: 'www.eunjisong.com',
                    imageUrl: '/Users/eunjisong/Documents/personal work/eunji/public/images/eunjisong.jpg',
                    description: 'Eunji\'s portfoli!' },
                    { url: 'www.groupwork.com',
                    imageUrl: '/Users/eunjisong/Documents/personal work/eunji/public/images/groupwork.jpg',
                    description: 'Capstone at Grace Hopper', },
                    { url: 'www.hackatone8933.com',
                    imageUrl: '/Users/eunjisong/Documents/personal work/eunji/public/images/hackatone8933.jpg',
                    description: 'Hackatone at Grace Hopper'
                    }];



db.sync()
  .then( () => {
    console.log('Seeding artwork...')
    Promise.map(allArtworks, artwork => {
      return Artwork.create(artwork);
    })
  })
  .then( () => {
    console.log('Seeding websites db...')
    Promise.map(allCoding, aSite => {
      return Coding.create(aSite)
    })
  })
  .then( () => {
    console.log('seeded successfully!!')
  })
  .catch(console.error);
