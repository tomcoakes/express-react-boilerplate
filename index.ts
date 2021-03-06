import express from 'express'

const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (_, res) => res.sendFile(__dirname + '/index.html'))

app.listen(port, () => {
  console.log('>>> Server is running on port ' + port)
})
