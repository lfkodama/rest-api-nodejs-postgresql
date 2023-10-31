const path = require('path');
const express = require('express');


const productsController = require('../controllers/products');
const servicesController = require('../controllers/services');

const router = express.Router();

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

router.get('/add-service', servicesController.getAddService);

router.post('/add-service', servicesController.postAddService);


module.exports = router;
