const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res) => {
    let places = [{
        name: 'Pizza Pi',
        city: 'San Jose',
        state: 'CA',
        cuisines: 'Italian',
        pic: '/images/pizza.jpg'
      }, {
        name: 'JavaBean',
        city: 'San Mateo',
        state: 'CA',
        cuisines: 'Coffee',
        pic: '/images/coffee-bean.jpg'
      }]
      res.render('places/index', { places })
})


module.exports = router