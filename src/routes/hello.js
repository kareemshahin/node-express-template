const express = require('express');
const router = express.Router();

const wrapAsync = require('../utils/wrap-async');

router.get(
  '/',
  wrapAsync(async (req, res, next) => {
    res.status(200).json({ message: 'hello' });
  })
);

module.exports = router;
