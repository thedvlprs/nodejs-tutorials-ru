const express = require('express');
const homeController = require('../controllers/homeController');
const homeRouter = express.Router();

homeRouter.get('/about', homeController.about);
homeRouter.get('/', homeController.index);

module.exports = homeRouter;
