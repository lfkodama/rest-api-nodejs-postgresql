const path = require('path');
const express = require('express');
const productsController = require('../controllers/products');
const servicesController = require('../controllers/services');


const router = express.Router();

router.get('/', productsController.getProducts);
router.get('/', servicesController.getServices);

module.exports = router;