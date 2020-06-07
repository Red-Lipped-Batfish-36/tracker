const express = require('express');
const db = require('../model/db.js');

const projectsController = {};

projectsController.getProjects = (req, res, next) => {
  const queryText = 'SELECT * FROM project WHERE user_id = $1;';
  const { user_id } = req.body;
  const values = [user_id];

  db.query(queryText, values)
    .then((data) => {
      res.locals.projects = data.rows;
      return next();
    })
    .catch((err) =>
      next({
        log: 'Error in projectsController.getProjects',
        status: 400,
        message: err,
      })
    );
};

projectsController.addProject = (req, res, next) => {
  const { title } = req.body;
  const user_id = req.body;
  const values = [title, user_id];
  const queryText = 'INSERT INTO project (title, user_id) VALUES ($1, $2);';

  db.query(queryText, values)
    .then((data) => {
      console.log(`something has been added to the DB`);
      return next();
    })
    .catch((err) =>
      next({
        log: 'Error in projectController.addProject',
        status: 400,
        message: err,
      })
    );
};

module.exports = projectsController;
