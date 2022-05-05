const mysql = require('mysql');
const dbConfig = require('../dbConfig');

async function getProductFromDb() {
    try {
const conn = await mysql.createConnection(dbConfig);
const sql = `SELECT * FROM products`;
const [result] = await conn.query(sql);
await conn.close();
       return getProductResult; 
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = {
    getProductFromDb, 
}