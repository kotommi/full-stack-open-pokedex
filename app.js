const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('working v11')
})

// eslint-disable-next-line no-unused-vars
app.get('/error', (_req, _res) => {
  // eslint-disable-next-line no-console
  console.log('(:')
  throw 'ERROR'
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port ', PORT)
})
