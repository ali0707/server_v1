const MYSQL_USERS_TABLE = `CREATE TABLE IF NOT EXISTS users(
    id INTEGER NOT NULL AUTO_INCREMENT, 
    name TEXT NOT NULL,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(60) NOT NULL,
    avatar TEXT,
    wallpaper TEXT,
    color TEXT,
    address VARCHAR(50),
    status VARCHAR(50),
    joinDate VARCHAR(15),
    active CHAR(1),
    PRIMARY KEY(id),
    UNIQUE(email, username))`;

    const MYSQL_ROOM_TABLE = `CREATE TABLE IF NOT EXISTS Room(
        id INTEGER NOT NULL AUTO_INCREMENT,
        title VARCHAR(300),
        Code VARCHAR(10),
        toUser INTEGER,
        fromUser INTEGER,
        askedDate VARCHAR(15),
        PRIMARY KEY(id),
        FOREIGN KEY(toUser) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY(fromUser) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE)`;

        const MYSQL_ANSWERD_ROOM_TABLE = `CREATE TABLE IF NOT EXISTS room_answers(
            id INTEGER NOT NULL AUTO_INCREMENT,
            body VARCHAR(300),
            RoomId INTEGER,
            toUser INTEGER,
            fromUser INTEGER,
            anonymous CHAR(1),
            answerdDate VARCHAR(15),
            PRIMARY KEY(id),
            UNIQUE(RoomId, fromUser),
            FOREIGN KEY(toUser) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
            FOREIGN KEY(fromUser) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
            FOREIGN KEY(RoomId) REFERENCES Room(id) ON DELETE CASCADE ON UPDATE CASCADE)`;

const MYSQL_QUESTIONS_TABLE = `CREATE TABLE IF NOT EXISTS questions(
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(300),
    toUser INTEGER,
    fromUser INTEGER,
    askedDate VARCHAR(15),
    anonymous CHAR(1),
    PRIMARY KEY(id),
    FOREIGN KEY(toUser) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(fromUser) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE)`;

const MYSQL_ANSWERD_TABLE = `CREATE TABLE IF NOT EXISTS answers(
    id INTEGER NOT NULL AUTO_INCREMENT,
    body VARCHAR(300),
    roomId INTEGER,
    toUser INTEGER,
    anonymous CHAR(1),
    fromUser INTEGER,
    answerdDate VARCHAR(15),
    PRIMARY KEY(id),
    FOREIGN KEY(toUser) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(fromUser) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(roomId) REFERENCES room(id) ON DELETE CASCADE ON UPDATE CASCADE)`;

const MYSQL_FOLLOWS_TABLE = `CREATE TABLE IF NOT EXISTS follows(
    id INTEGER NOT NULL AUTO_INCREMENT,
    fromUser INTEGER,
    toUser INTEGER,
    PRIMARY KEY(id),
    UNIQUE(fromUser, toUser),
    FOREIGN KEY(toUser) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(fromUser) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE)`;
    
const MYSQL_NOTIFICATIONS_TABLE = `CREATE TABLE IF NOT EXISTS notifications(
    id INTEGER NOT NULL AUTO_INCREMENT,
    body VARCHAR(50),
    toUser INTEGER,
    createdDate VARCHAR(15),
    action VARCHAR(15),
    opened CHAR(1),
    data TEXT,
    PRIMARY KEY(id),
    FOREIGN KEY(toUser) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE)`;

const MYSQL_REACTIONS_TABLE = `CREATE TABLE IF NOT EXISTS reactions(
    id INTEGER NOT NULL AUTO_INCREMENT,
    react CHAR(1),
    fromUser INTEGER,
    toUser INTEGER,
    answerId INTEGER,
    PRIMARY KEY(id),
    UNIQUE(fromUser, answerId),
    FOREIGN KEY(toUser) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(fromUser) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(answerId) REFERENCES answers(id) ON DELETE CASCADE ON UPDATE CASCADE)`;
   
exports.MYSQL_USERS_TABLE = MYSQL_USERS_TABLE;

exports.MYSQL_ANSWERD_ROOM_TABLE=MYSQL_ANSWERD_ROOM_TABLE;

exports.MYSQL_ROOM_TABLE = MYSQL_ROOM_TABLE;

exports.MYSQL_QUESTIONS_TABLE = MYSQL_QUESTIONS_TABLE;

exports.MYSQL_ANSWERD_TABLE = MYSQL_ANSWERD_TABLE;

exports.MYSQL_FOLLOWS_TABLE = MYSQL_FOLLOWS_TABLE;

exports.MYSQL_NOTIFICATIONS_TABLE = MYSQL_NOTIFICATIONS_TABLE;

exports.MYSQL_REACTIONS_TABLE = MYSQL_REACTIONS_TABLE;