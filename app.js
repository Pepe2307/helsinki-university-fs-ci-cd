const express = require('express')
const app = express()

const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

// Endpoint inteligente para simular el error de producción
app.get('/health', (req, res) => {
  if (process.env.PORT === '10000' || process.env.NODE_ENV === 'production') {
    throw new Error('¡BUM! Error catastrófico solo en producción')
  }
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('3')
})

const start = async () => {
  await app.listen(PORT)
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
}
// Test ex 13 y 14
start()