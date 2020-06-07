const express = require('express');
const db = require('../model/db.js');

const projectsController = {};

projectsController.getProjects = (req, res, next) => {
  const queryText = 'SELECT * FROM project WHERE user_id = $1;';
  const values = [req.params.user];

  db.query(queryText, values)
    .then((data) => {
      res.locals.projects = data.rows;
      return next();
    })
    .catch((err) =>
      next({
        log: 'Error in timerHistoryController.creatTimerEntry',
        status: 400,
        message: err,
      })
    );
};

module.exports = projectsController;
