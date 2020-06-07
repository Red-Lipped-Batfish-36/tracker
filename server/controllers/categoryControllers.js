const express = require('express');
const db =  require('../model/db');

const categoryControllers = {};

categoryControllers.getCategory = (req, res, next) => {
    const queryText = 'SELECT * From "category"';
    db.query(queryText)
        .then(data => {
            res.locals.data = data.rows;
            return next();
        })
        .catch(err => next({
            log: 'Error in categoryControllers.getCategory',
            status: 400,
            message: err 
        }));
};

categoryControllers.addCategory = (req, res, next) => {
    const { title } = req.body;
    const values = [title];

    const queryText = 'INSERT INTO category(title) VALUES($1)'
    db.query(queryText, values)
        .then(data => {
            console.log(`${title} has been add to the DB`)
            return next();
        })
        .catch(err => next({
            log: 'Error in categoryControllers.addCategory',
            status: 400,
            message: err,
        })) 
};



module.exports = categoryControllers;
