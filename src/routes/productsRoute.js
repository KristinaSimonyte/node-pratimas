const express = require('express');
const productsController = require ('../controllers/productsController');

const productsRoute = express.Router();

productsRoute.get('/products', productsController.getProducts);
productsRoute.post('/products', productsController.createProduct);
productsRoute.delete('/products/:id', productsController.deleteProduct);
// productRoute.get('/totalProducts', productController.getProduct);

module.exports = productsRoute;