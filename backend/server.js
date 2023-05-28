const express = require('express')
const app = express()

const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Mongo connected'))
.catch((err) => console.log(err))

app.listen(proces.env.PORT, () => console.log(`Listening at port ${process.env.PORT}`))
