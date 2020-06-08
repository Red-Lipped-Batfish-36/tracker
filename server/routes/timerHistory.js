const express = require('express');
const router = express.Router();

const timerHistoryController = require('../controllers/timerHistoryController.js')

router.post('/', timerHistoryController.createTimerEntry, (req, res) => {
  res.status(201).json('timer entry added!');
})

router.get('/', timerHistoryController.getTimerHistory, (req, res) => {
  res.status(201).json(res.locals.timerHistory);
})

module.exports = router;
