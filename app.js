const express = require('express')
const path = require('path')
const cors = require('cors')

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', express.static(path.join(__dirname, 'client', 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}....`)
})
