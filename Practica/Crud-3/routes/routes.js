const express = require('express');
const routes = express.Router();
const {index} = require('../controllers/controllers.js');


routes.get('/', index);