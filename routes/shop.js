const path = require('path');
const express = require('express');
const shopController = require('../controllers/shop');
const servicesController = require('../controllers/services');


const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

router.get('/services', servicesController.getServices);

module.exports = router;