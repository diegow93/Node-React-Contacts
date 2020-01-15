const addContact = (req, res, db) => {
    const { firstName, lastName, address, phoneNumber } = req.body
    db.query(
        'INSERT INTO contacts (firstname, lastname, address, phonenumber) VALUES ($1, $2, $3, $4) RETURNING *',
        [firstName, lastName, address, phoneNumber],
        (error, result) => {
            if (error) {
                res.send(error)
            } else {
                res.send(result.rows[0])
            }
        }
    )
}

const removeContact = (req, res, db) => {
    const { id } = req.body
    db.query(
        'DELETE FROM contacts WHERE id = $1 RETURNING *',
        [id],
        (error, result) => {
            if (error) {
                res.send(error)
            } else if (result.rows[0]) {
                res.send(result.rows[0])
            } else {
                res.send(`There is no user with ID: ${id}`)
            }
        }
    )
}

const editContact = (req, res, db) => {
    const { id, firstName, lastName, address, phoneNumber } = req.body
    db.query(
        'UPDATE contacts SET firstname = $2, lastname = $3, address = $4, phonenumber = $5 WHERE id = $1 RETURNING *',
        [id, firstName, lastName, address, phoneNumber],
        (error, result) => {
            if (error) {
                res.send(error)
            } else {
                res.send(result.rows[0])
            }
        }
    )
}

const getContact = (req, res, db) => {
    const { id } = req.query
    let sqlSentence
    let sqlParameters
    if (id === 'all') {
        sqlSentence = 'SELECT * FROM contacts'
        sqlParameters = []
    } else {
        sqlSentence = 'SELECT * FROM contacts WHERE id = $1'
        sqlParameters = [id]
    }
    db.query(sqlSentence, sqlParameters, (error, result) => {
        if (error) {
            res.send(error)
        } else if (result.rows[0]) {
            if (id === 'all') {
                res.send(result.rows)
            } else {
                res.send(result.rows[0])
            }
        } else {
            res.send(`There is no user with ID: ${id}`)
        }
    })
}

module.exports = {
    addContact,
    removeContact,
    editContact,
    getContact
}
