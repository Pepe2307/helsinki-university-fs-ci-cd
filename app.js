const express = require('express')
const app = express()

const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

// El endpoint de salud detecta si está en Render o en tu PC local
app.get('/health', (req, res) => {
  // En Render siempre existe la variable de entorno PORT configurada por ellos (ej: 10000)
  // En tu PC local corre con los tests. Si detecta que está en producción, ¡explota!
  if (process.env.NODE_ENV === 'production' || process.env.PORT === '10000') {
    throw new Error('¡BUM! Error catastrófico solo en producción')
  }
  
  res.send('ok') // En tu PC local para los tests va a dar OK
})

app.get('/version', (req, res) => {
  res.send('3') // Queremos ver si llega a la versión 3 o se queda en la 2
})

const start = async () => {
  await app.listen(PORT)
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
}

start()