const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');
const tableName = 'products';

async function getProductsFromDb() {
  try {
    console.log(dbConfig);
    const conn = await mysql.createConnection(dbConfig);
    const sql = `SELECT * FROM products`;
    const [result] = await conn.execute(sql);
    conn.end();
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function insertProduct(image_url, title, description, price) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
    INSERT INTO ${tableName} (image_url, title, description, price)
    VALUES (?, ?, ?, ?)
    `;
    const [insertResult] = await conn.execute(sql, [
      image_url,
      title,
      description,
      price,
    ]);
    await conn.close();
    return insertResult;
  } catch (error) {
    return false;
  }
}

async function removeProductFromDb(id) {
  try {
    const sql = `DELETE FROM ${tableName} WHERE id=?`;
    const conn = await mysql.createConnection(dbConfig);
    const [deleteResult] = await conn.execute(sql, [id]);
    await conn.close();
    return deleteResult;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function countProductsFromDb() {
  try {
    const sql = 'SELECT COUNT(*) FROM products';
    const conn = await mysql.createConnection(dbConfig);
    const [countResult] = await conn.query(sql);
    await conn.close();
    return countResult;
  } catch (error) {
    return false;
  }
}

module.exports = {
  getProductsFromDb,
  insertProduct,
  removeProductFromDb,
  countProductsFromDb
};
