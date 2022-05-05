const express = require('express');
const productController = require ('../controllers/productController');

const productRoute = express.Router();

productRoute.get('/products', productController.getProduct);
// productRoute.post('/products', productController.postProduct);
// productRoute.delete('/products/:id', productController.getProduct);
// productRoute.get('/totalProducts', productController.getProduct);

module.exports = productRoute;