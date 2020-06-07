const express = require('express');

const categoryController = require('../controllers/categoryControllers');

const router = express.Router();



router.get('/', categoryController.getCategory, (req,res) => {
    res.status(200).json(res.locals.data);
});

router.post('/', categoryController.addCategory, (req,res) => {
    res.status(201).json('new category is added');
});

module.exports = router;