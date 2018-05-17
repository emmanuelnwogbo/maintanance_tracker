import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import routes from './routes'

dotenv.config()
const app = express();

const {
  indexRoute
} = routes;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/api/v1', indexRoute)


const PORT = process.env.PORT || 8080

app.listen(PORT, error => {
  if (error) {
    return error
  }

  return `server started on port ${PORT}`
})


export default app;