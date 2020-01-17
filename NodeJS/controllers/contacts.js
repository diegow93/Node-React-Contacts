'use strict'

// Database.
const db = require('../db/index')
const _querys = require('../db/querys')
const querys = new _querys()

class Contacts {
  constructor() {}

  async addContact(req, res) {
    const { firstName, lastName, address, phoneNumber } = req.body
    try {
      const result = await db.query(querys.addContact(), [
        firstName,
        lastName,
        address,
        phoneNumber
      ])
      res.send(result.rows[0])
    } catch (error) {
      res.send(error.detail)
    }
  }

  async removeContact(req, res) {
    const { id } = req.body
    try {
      const result = await db.query(querys.removeContactByID(), [id])
      if (result.rows[0]) {
        res.send(result.rows[0])
      } else {
        res.send(`There is no user with ID: ${id}`)
      }
    } catch (error) {
      res.send(error.detail)
    }
  }

  async editContact(req, res) {
    const { id, firstName, lastName, address, phoneNumber } = req.body
    try {
      const result = await db.query(querys.editContact(), [
        id,
        firstName,
        lastName,
        address,
        phoneNumber
      ])
      res.send(result.rows[0])
    } catch (error) {
      res.send(error.detail)
    }
  }

  async getContact(req, res) {
    const { id } = req.query
    let sqlSentence
    let sqlParameters
    if (id === 'all') {
      sqlSentence = querys.getAllContacts()
      sqlParameters = []
    } else {
      sqlSentence = querys.getContactByID()
      sqlParameters = [id]
    }
    try {
      const result = await db.query(sqlSentence, sqlParameters)
      if (result.rows[0]) {
        if (id === 'all') {
          res.send(result.rows)
        } else {
          res.send(result.rows[0])
        }
      } else {
        res.send(`There is no user with ID: ${id}`)
      }
    } catch (error) {
      res.send(error.detail)
    }
  }
}

module.exports = Contacts
