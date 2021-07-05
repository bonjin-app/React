const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
})
connection.connect();


const multer = require('multer');
const upload = multer({ dest: './uploads' });

app.get('/api/customers', (req, res) => {
    connection.query(
        "SELECT * FROM customer",
        (err, rows, fields) => {
            console.log('rows', rows)
            res.send(rows);
        });
})

app.post('/api/customers', upload.single('image'), (req, res) => {
    let sql = `INSERT INTO customer VALUES(null, ?, ?, ?, ?, ?)`;
    let image = '/image/' + req.file.filename;
    let name = req.body.name;
    let birthDay = req.body.birthDay;
    let gender = req.body.gender;
    let job = req.body.job;

    let params = [
        image, name, birthDay, gender, job
    ]

    connection.query(sql, params,
        (err, rows, field) => {
            console.log('err', err)
            res.send(rows);
        })
})

app.use('/image', express.static('./uploads'));
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})