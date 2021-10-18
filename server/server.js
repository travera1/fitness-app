const express = require('express')
const app = express()
const { PORT } = require('../config')
const path = require('path')

//for production build
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
    })
}

app.listen(PORT, () => console.log(`App listening at http://loaclhost${PORT}`))