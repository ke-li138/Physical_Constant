const express = require("express");
const router = express.Router();
const constantController = require('../controllers/constantController');
const ConstantService = constantController.ConstantService;

//update
router.get('/', (req, res, next) => {
    res.render('apiTest');
})

module.exports = router;