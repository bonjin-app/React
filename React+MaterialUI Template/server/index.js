const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
    res.send('API GET REQUEST SUCCESS!!');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})