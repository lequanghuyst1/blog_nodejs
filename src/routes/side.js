const express = require('express');
const router = express.Router();
const SideController = require('../app/controllers/SideController');

router.use('/search', SideController.search);
router.use('/', SideController.index);

module.exports = router;
