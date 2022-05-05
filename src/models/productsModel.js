const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

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

module.exports = {
  getProductsFromDb,
};
