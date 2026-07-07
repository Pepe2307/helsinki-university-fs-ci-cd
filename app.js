const express = require('express')
const app = express()

const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

// Endpoint de salud restaurado y sano
app.get('/health', (req, res) => {
  res.send('ok')
})

/* app.get('/health', (req, res) => {
  if (process.env.PORT === '10000' || process.env.NODE_ENV === 'production') {
    throw new Error('Error catastrófico solo en producción')
  }
  res.send('ok')
}) */

// Versión final de entrega
app.get('/version', (req, res) => {
  res.send('4')
})

const start = async () => {
  await app.listen(PORT)
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
}

start()