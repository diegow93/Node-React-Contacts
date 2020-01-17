'use strict'

const express = require('express')

// External config file.
require('dotenv').config()

// Express app.
const app = express()

// Middleware to be used.
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')

// Use in every request.
app.use(helmet())
app.use(bodyParser.json())
app.use(morgan('combined'))

// Controllers.
const _contacts = require('./controllers/contacts')
const contacts = new _contacts()

// Routes.
app.get('/', (req, res) => res.send('Hello world!'))
app.get('/api/contacts', (req, res) => contacts.getContact(req, res))
app.post('/api/contacts', (req, res) => contacts.addContact(req, res))
app.put('/api/contacts', (req, res) => contacts.editContact(req, res))
app.delete('/api/contacts', (req, res) => contacts.removeContact(req, res))

// Server connection.
app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT || 3000}`)
})
