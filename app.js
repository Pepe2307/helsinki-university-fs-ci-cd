const express = require('express')
const app = express()

const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

// NUEVO: Endpoint para el control de salud de Render
app.get('/health', (req, res) => {
  res.send('ok')
})

// Tu endpoint anterior de versión
app.get('/version', (req, res) => {
  res.send('2')
})
const start = async () => {
  await app.listen(PORT)
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
}

start()