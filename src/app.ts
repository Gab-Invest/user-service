import 'dotenv/config'
import express from 'express'

const app = express()

app.use('/', (req, res) => {
  return res.send('server is up!')
})

app.listen(process.env.PORT || 5000, () => { console.log('server is running') })
