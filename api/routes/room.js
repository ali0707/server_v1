const express = require('express');
const checkAuth = require('../../middleware/check_auth');
const controller = require('../controllers/room');

const router = express.Router();

router.get('/',  controller.getCodeByID);
router.post('/createRoom', controller.createNewroom);
router.post('/loginroom', controller.roomLogin);
router.get('/:id/', controller.getRoomByID);
module.exports = router;