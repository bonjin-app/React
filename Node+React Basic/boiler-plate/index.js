const express = require('express')
const app = express()
const port = 5000

// mongodb+srv://bonjin:<password>@boilerplate.lphlf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})