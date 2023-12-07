const path = require('path');
const express = require('express');


const adminController = require('../controllers/admin');
const servicesController = require('../controllers/services');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);


// /admin/add-service => GET
router.get('/add-service', servicesController.getAddService);

// /admin/add-service => POST
router.post('/add-service', servicesController.postAddService);


module.exports = router;
