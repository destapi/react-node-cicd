const express = require('express');
const router = express.Router();

const home = require('./home');
const users = require('./todos');

router.use("/", home);
router.use("/todos", users);

module.exports = router;