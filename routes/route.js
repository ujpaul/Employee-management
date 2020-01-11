const express = require('express');
// const app = require('../app.js');
const createEmployee = require('../controller/createEmployee');
const router = express.Router();
router.post('/emoloyees',createEmployee);
module.exports = router;