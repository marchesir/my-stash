// packages.
const express = require('express')

// constants.
const app = express()  // handle to express framework.
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World from ExpressJS!\n')
})

app.listen(port, () => {
  console.log(`ExpressJS Server listening at http://localhost:${port}`)
})
