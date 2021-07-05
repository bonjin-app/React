const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/todo', async (req, res) => {
    await sleep(1000);

    res.send([
        { id: 1, title: 'css 공부하기', status: 'todo' },
        { id: 2, title: 'javascript 공부하기', status: 'todo' },
        { id: 3, title: 'swift 공부하기', status: 'todo' },
        { id: 4, title: 'java 공부하기', status: 'todo' },
        { id: 5, title: 'react 공부하기', status: 'todo' },
    ])
})

const sleep = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

app.listen(5000, () => {
    console.log('started server')
})