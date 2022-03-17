var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi, there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World",
    user: "Mikando",
    added: new Date()
  },
  {
    text: "Ich heiße Serdar Özdemir.\nYo hablo espanol, also english, and a tad bit of turkish.",
    user: "Serdar",
    added: new Date()
  }
];



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
    { title: 'Mini Messagebaord',
      messages: messages 
    });
});



module.exports = router;

router.get('/new', function(req, res, next) {
  res.render('new', {title: 'New Post'} )
});

