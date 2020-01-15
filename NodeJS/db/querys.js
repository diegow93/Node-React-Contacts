'use strict'

class Querys {
    constructor() {}

    addContact() {
        return 'INSERT INTO contacts (firstname, lastname, address, phonenumber) VALUES ($1, $2, $3, $4) RETURNING *'
    }

    removeContactByID() {
        return 'DELETE FROM contacts WHERE id = $1 RETURNING *'
    }

    editContact() {
        return 'UPDATE contacts SET firstname = $2, lastname = $3, address = $4, phonenumber = $5 WHERE id = $1 RETURNING *'
    }

    getAllContacts() {
        return 'SELECT * FROM contacts'
    }

    getContactByID() {
        return 'SELECT * FROM contacts WHERE id = $1'
    }
}

module.exports = Querys
