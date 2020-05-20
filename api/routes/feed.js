const express = require('express');
const controller = require('../controllers/feed');
const checkAuth = require('../../middleware/check_auth');
const router = express.Router();

router.get('/', controller.getUserFeed);

//router.get('/:id/', controller.getBestid);

router.get('/home', controller.getHomeFeed);

router.get('/:roomId', controller.getBestFeed);


module.exports = router;