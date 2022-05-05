const express = require('express');
const productsController = require ('../controllers/productsController');

const productsRoute = express.Router();

productsRoute.get('/products', productsController.getProducts);
// productRoute.post('/products', productController.postProduct);
// productRoute.delete('/products/:id', productController.getProduct);
// productRoute.get('/totalProducts', productController.getProduct);

module.exports = productsRoute;