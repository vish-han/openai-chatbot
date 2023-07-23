const express = require('express');
const router = express.Router();
const chatControllers = require('../controllers/chat.controller');

router.route('/chat').post(chatControllers.postChatResult);

module.exports = router;
