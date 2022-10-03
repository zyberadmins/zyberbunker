const pool = require('./databaseConnectionPool');
const user_login =
    `CREATE TABLE IF NOT EXISTS user_login(
    login_name varchar(20),
    password varchar(20),
    hashed_password binary(64),
    PRIMARY KEY (login_name))`;

    pool.query(user_login, function (err, result, fields) {
        if (err && err.message !== "ER_TABLE_EXISTS_ERROR") {
            throw new Error(err);
        }
     }); 

