const mysql = require('mysql');
const schema = require('../database/schema');

const databaseConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'choicee',
};

const connection = mysql.createConnection(databaseConfig);

connection.connect(error => {
    if (error) throw error;

    console.debug("Open MySQL Connection");

    //Create users table
    connection.query(schema.MYSQL_USERS_TABLE, (err, res) =>{
        if (err) throw err;
        console.log("Users Table Done");
    });

     //Create room table
     connection.query(schema.MYSQL_ROOM_TABLE, (err, res) =>{
        if (err) throw err;
        console.log("room Table Done");
    });

     //Create AN room table
     connection.query(schema.MYSQL_ANSWERD_ROOM_TABLE, (err, res) =>{
        if (err) throw err;
        console.log("room Table Done");
    });

    //Create questions table
    connection.query(schema.MYSQL_QUESTIONS_TABLE, (err, res) =>{
        if (err) throw err;
        console.log("Questions Table Done");
    });

    //Create answerd table
    connection.query(schema.MYSQL_ANSWERD_TABLE, (err, res) =>{
        if (err) throw err;
        console.log("Answerd Table Done");
    });

    //Create follows table
    connection.query(schema.MYSQL_FOLLOWS_TABLE, (err, res) =>{
        if (err) throw err;
        console.log("Follows Table Done");
    });

    //Create notifications table
    connection.query(schema.MYSQL_NOTIFICATIONS_TABLE, (err, res) =>{
        if (err) throw err;
        console.log("Notifications Table Done");
    });

    //Create reactions table
    connection.query(schema.MYSQL_REACTIONS_TABLE, (err, res) =>{
        if (err) throw err;
        console.log("Reactions Table Done");
    });
});

module.exports = connection;