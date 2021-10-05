var express = require('express');
var router = express.Router();
var {registerInitialCheck} = require('../middlewares/registerChecks');
var {register} = require('../controllers/register');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/**

 * @requires {email, password, confirmPassword} - req.body
 * @description
 * Security, performance and edge cases
 * 
 
 * 
 * Level-2
 * JS / SQL Injection - THA
 * 
 * Level-3
 
 * 
*/

router.post('/register', registerInitialCheck, register);
router.post('/register-super-admin', registerInitialCheck, register);


module.exports = router;
