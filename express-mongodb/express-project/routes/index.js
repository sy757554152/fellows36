var express = require('express');
var router = express.Router();
var User=require('../controllers/user')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/newLogin',User.do_newlogin);

module.exports = router;
