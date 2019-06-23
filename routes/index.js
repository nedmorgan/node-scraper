var express = require('express')
var router = express.Router()
const getResults = require('../scrapper')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const result = await getResults()
  res.render('index', result)
})
module.exports = router
