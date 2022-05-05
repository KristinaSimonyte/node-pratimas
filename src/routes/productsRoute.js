const express = require('express');
const productsController = require ('../controllers/productsController');

const productsRoute = express.Router();

productsRoute.get('/products', productsController.getProducts);
productsRoute.post('/products', productsController.createProduct);
productsRoute.delete('/products/:id', productsController.deleteProduct);
productsRoute.get('/totalproducts', productsController.totalProducts);

module.exports = productsRoute;