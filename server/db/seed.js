//db
const db = require('./models');
const path = require('path');


//models
const Artwork = db.model('artwork');
const Coding = db.model('coding');

const Promise = require('bluebird')

const allArtworks = [
                     { imageUrl: 'http://s3images.coroflot.com/user_files/individual_files/730624_9ghairugdvi0adq9cwhwdbafy.jpg',description: 'Digital Painting' },
                     { imageUrl: 'http://s3images.coroflot.com/user_files/individual_files/large_730624_hoojpqdhxu3qokywzter0avjj.png', description: 'Marilyn'},
                     { imageUrl: 'http://s3images.coroflot.com/user_files/individual_files/large_730624_vmofuouteyioo6im5ybkdlnol.jpg', description: 'Pen Drawing'},
                     { imageUrl: 'http://s3images.coroflot.com/user_files/individual_files/large_730624_k6xucdkxvhpslkgcprxsw9bkb.jpg', description: 'Catching Van Gogh'},
                     { imageUrl: 'http://s3images.coroflot.com/user_files/individual_files/large_730624_ltg897n_aqhjh7vdiqkegtlvc.jpg', description: 'Octopus Lady'},
                     { imageUrl: 'http://s3images.coroflot.com/user_files/individual_files/large_730624_v3fadvposfgnwdatmfchwnchw.jpg', description: 'My Don Quixot'}
                    ];


const allCoding = [{ url: 'www.chenglinphoto.com',
                    imageUrl: 'http://suzumori.net/architecture/wp-content/uploads/2017/01/343-6th-Ave-2_2-R-1800x1186.jpg',
                    description: 'Cheng\'s portfoilo!' },
                    { url: 'www.kateyip.com',
                    imageUrl: 'http://suzumori.net/architecture/wp-content/uploads/2017/01/343-6th-Ave-2_17-R-1800x1200.jpg',
                    description: 'Kate\'s portfolio!' },
                    { url: 'www.groupwork.com',
                    imageUrl: 'http://suzumori.net/architecture/wp-content/uploads/2017/01/343-6th-Ave-2_24-R-1800x1047.jpg',
                    description: 'Capstone at Grace Hopper', },
                    { url: 'www.timewatcher.com',
                    imageUrl: 'http://suzumori.net/architecture/wp-content/uploads/2017/01/315-HUDSON-OKL-OFFICE_134-R-1800x1200.jpg',
                    description: 'Stackathon at Grace Hopper'
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
