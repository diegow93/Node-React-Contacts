const express = require('express')

// External config file.
require('dotenv').config()

// Express app.
const app = express()

// Database.
const db = require('./db/index')

// Middleware to be used.
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')

// Use un every request.
app.use(helmet())
app.use(bodyParser.json())
app.use(morgan('combined'))

// Controllers.
const contactsController = require('./controllers/contacts')

// Routes.
app.get('/', (req, res) => res.send('Hello world!'))
app.get('/all', (req, res) => contactsController.METHOD(req, res, db))
app.get('/contacts', (req, res) => contactsController.METHOD(req, res, db))
app.post('/contacts', (req, res) => contactsController.addContact(req, res, db))
app.put('/contacts', (req, res) => contactsController.METHOD(req, res, db))
app.delete('/contacts', (req, res) =>
    contactsController.removeContact(req, res, db)
)

// Server connection.
app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port ${process.env.PORT || 3000}`)
})
