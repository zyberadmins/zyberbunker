let mysql = require('mysql');
let CONFIG = require('./config');
let pool = mysql.createPool({
    connectionLimit: 10,
    user: CONFIG.user,
    host: CONFIG.host,
    password: CONFIG.password,
    database: CONFIG.database,
    multipleStatements: CONFIG.multipleStatements
});
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()
    return
});
module.exports = pool;