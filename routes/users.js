var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  
  router.get('/signin', (req, res) => {
    const userid = req.query.userid;
    if (userid) {
      res.redirect(`/users/${userid}`);
    } else {
      res.redirect('/users/signup');
    }
  });
  
  router.get('/signup', function(req, res) {
    res.render('signup'); 
  });
  
  router.get('/:userid', function(req, res) {
    const userId = req.params.userid;
    res.send(`Olá, ${userId}! Se você estiver vendo :userid, você está acessando esta página da maneira errada...`); 
  });
  var subheading = "Bem vindo, usuário anônimo!";
  
  res.render('users', {subheading: subheading});
});

module.exports = router;