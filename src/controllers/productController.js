const { successResponse, failResponse } = require('../helpers/dbHelper');
const { getProductFromDb } = require('../models/productModel');

async function getProduct(req, res) {
    const products = await getProductFromDb();
    products ? successResponse(res, products) : failResponse(res);
}

module.exports = {
    getProduct,
};