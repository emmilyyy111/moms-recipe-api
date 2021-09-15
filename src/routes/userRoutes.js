const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');


router.get('/allusers', userController.getAllUsers);
router.get('/signup', userController.signupGet);
router.post('/signup', userController.signupPost);
router.get('/login', userController.loginGet);
router.post('/login',userController.loginPost);

module.exports = router;