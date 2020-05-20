const database = require('../../database/config');
var app= require('express')();

exports.loginroom = (code) => new Promise((resolve, reject) => {
    const sqlQuery = `SELECT id, title, fromUser FROM room WHERE Code = ?  LIMIT 1`;
    database.query(sqlQuery, code, ((err, result) => {
        if (err) throw err;
        const validInfo = (result.length == 1);
        if (validInfo) {
            resolve([true, result[0]]);
        } else {
            resolve([false]);
        }
    }));
});



exports.createNewroom = user => new Promise((resolve, reject) => { 
    const query = `INSERT INTO room (title, Code ,toUser, fromUser, askedDate) VALUES ( ?, ?, ?, ?,NOW())`;
    database.query(query, user, (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                resolve([false, {
                    "id": result.insertId,
                    "joinDate":Date.now
                }]);
            } 
            else
 {
                throw err;
            }
            }else{
                const isValidRequest = result['affectedRows'] == 1;
                resolve([isValidRequest, result.insertId]);            }
        
    });
});




exports.getRoomByID = args => new Promise((resolve, reject) => {
    const query = `SELECT DISTINCT id,
                                  title,
                                   toUser AS toUserId,
                                   (SELECT username FROM users WHERE toUser = users.id) AS toUserName,
                                   fromUser AS fromUserId,
                                   (SELECT username FROM users WHERE fromUser = users.id) AS fromUserName,
                                   (SELECT avatar FROM users WHERE fromUser = users.id) AS fromUserAvatar  
                            FROM room WHERE id = ? LIMIT 1`;
    database.query(query, args, (err, result) => {
        if (err) throw err;
        if (result.length == 1) {
            resolve([true, result[0]]);
        } else {
            resolve([false]);
        }
    });
});

exports.getUserrooms = args => new Promise((resolve, reject) => {
    const query = `SELECT DISTINCT id,
                                   title,
                                   toUser AS toUserId,
                                   (SELECT username FROM users WHERE toUser = users.id) AS toUserName,
                                   fromUser AS fromUserId,
                                   (SELECT username FROM users WHERE fromUser = users.id) AS fromUserName,
                                   (SELECT avatar FROM users WHERE fromUser = users.id) AS fromUserAvatar,
                                   askedDate,
                                   anonymous
                                   FROM questions WHERE toUser = ? LIMIT ? OFFSET ?`;

    database.query(query, args, (err, result) => {
        if (err) throw err;
        resolve(result);
    });
});