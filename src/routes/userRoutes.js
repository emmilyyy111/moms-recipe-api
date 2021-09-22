const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/allusers', userController.getAllUsers);
router.post('/signup', userController.createUser);
router.post('/login',userController.login);

module.exports = router;