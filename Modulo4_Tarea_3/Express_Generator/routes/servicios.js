var express = require('express');
var router = express.Router();

/* GET Servicios page. */

router.get('/', function(req, res, next) {
    res.render('servicios', { title: 'Pagina - Servicios' });
  });
  

module.exports = router;
