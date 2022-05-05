const { successResponse, failResponse } = require('../helpers/dbHelper');
const { getProductsFromDb, insertProduct, removeProductFromDb } = require('../models/productsModel');

async function getProducts(req, res) {
  const products = await getProductsFromDb();
  console.log(products);
  return products === false
    ? failResponse(res)
    : successResponse(res, products);
}

async function createProduct(req, res) {
  const { image_url, title, description, price } = req.body;
  const inserResult = await insertProduct(image_url, title, description, price);
  return inserResult === false
    ? failResponse(res)
    : successResponse(res, 'product created');
}

async function deleteProduct(req, res) {
  const deleteProduct = await removeProductFromDb(req.params.id);
  console.log(deleteProduct);
  return deleteProduct === false
    ? failResponse(res)
    : successResponse(res, 'product deleted');
}

module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
};
