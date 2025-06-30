const express = require('express');
const authControllers = require('../controllers/authController.js');

const router = express.Router();

router.get('/register', authControllers.getRegisterPage);
router.get('/login', authControllers.getLoginPage);

module.exports = router;
