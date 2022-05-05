const { successResponse, failResponse } = require('../helpers/dbHelper');
const { getProductsFromDb } = require('../models/productsModel');

async function getProducts(req, res) {
    const products = await getProductsFromDb();
    console.log(products);
   return products === false 
     ? successResponse(res, products) : failResponse(res);
}

module.exports = {
    getProducts,
};