const express = require('express');
const authControllers = require('../controllers/authController.js');

const router = express.Router();

router.get('/register', authControllers.getRegisterPage);

module.exports = router;
