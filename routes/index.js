const express = require('express');
const router  = express.Router();
const usersController = require('../controllers/users.controllers');

/* GET home page */
router.get('/', usersController.list);

router.get('/create', usersController.create);
// router.post('/create', usersController.doCreate); 

module.exports = router;
