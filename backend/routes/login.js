const express = require('express');
const loginRouter = express.Router();
const connectionPool = require('../databaseConnectionPool');

//change to hash based passwords
loginRouter.get('/name', (req, res) => {
    res.status(200).send({name: "schwanz"});

});
loginRouter.post('/login', (req, res) => {
    let name = req.body.sender;
    let password = req.body.password;
    let sql = `select password from user_login where login_name = '${name}'`; 
    connectionPool.query(sql, (error, rows) => {
        if(rows) {
            for(let row of rows) {               
                if(row.password == password) {
                    res.status(200).send({"valid": true})
                    return;
                }
            }
            res.status(200).send({"valid": false})
        } else {
            res.status(200).send({"valid": false})
        }
     })
});
loginRouter.post('/ping', (req, res) => {
    res.status(200).send({message: "pong"});
});
//always good to have ;)
function convertDateToReadableFormat(date){
    try {
        let newDate = new Date(date);
        return newDate.toISOString().slice(0, 19).replace('T', ' ');
    } catch (err){
        return date.slice(0, 19).replace('T', ' ');
    }
}

module.exports = loginRouter;

