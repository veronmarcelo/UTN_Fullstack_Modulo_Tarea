var express = require('express');
var router = express.Router();

/* GET Nosotros page. */
router.get('/', function(req, res, next) {
    res.render('nosotros', { title: 'Pagina - Nosotros' });
  });
  

module.exports = router;
