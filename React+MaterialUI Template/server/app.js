const express = require('express');
const logger = require('morgan');
// db 관련
const db = require('./models');

class App {
    constructor() {
        this.app = express();

        // db 접속
        this.dbConnection();

        // 미들웨어 셋팅
        this.setMiddleWare();
    }

    // DB authentication
    dbConnection() {
        db.sequelize.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .then(() => {
                console.log('DB Sync complete.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    }

    // 미들웨어 셋팅
    setMiddleWare() {
        this.app.use(logger('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));

    }
}
module.exports = new App().app;