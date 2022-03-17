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

// *GET new message.
router.get('/new', function(req, res, next) {
  res.render('form', {title: 'New Post'} )
});


// POST submit new message
router.post("/new", function(req, res, next) {
  messages.push({
    text: req.body.comment,
    comment: req.body.user,
    added: new Date()
  })
  res.redirect('/')
})






module.exports = router;


