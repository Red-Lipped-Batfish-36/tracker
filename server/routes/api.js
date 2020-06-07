const express = require('express');
const router = express.Router();

const projectsController = require('../controllers/projectsController.js');
const categoryController = require('../controllers/categoryController.js');
const timerHistoryController = require('../controllers/timerHistoryController.js');

router.get(
  '/',
  categoryController.getCategory,
  projectsController.getProjects,
  timerHistoryController.getTimerHistory,
  (req, res) => {
    res.status(200).json({
      categories: res.locals.categories,
      projects: res.locals.projects,
      timerHistory: res.locals.timerHistory,
    });
  }
);

module.exports = router;
