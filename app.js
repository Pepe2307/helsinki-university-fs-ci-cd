const express = require('express')
const app = express()

const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

// NUEVO: Endpoint dummy para chequear la versión en producción
app.get('/version', (req, res) => {
  res.send('1')
})

const start = async () => {
  await app.listen(PORT)
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
}

start()