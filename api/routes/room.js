const express = require('express');
const checkAuth = require('../../middleware/check_auth');
const controller = require('../controllers/room');

const router = express.Router();


router.post('/createRoom', controller.createNewroom);
router.post('/loginroom', controller.roomLogin);
router.get('/:id/', controller.getRoomByID);
router.get('/code/:id/', controller.getCodeByID);


module.exports = router;