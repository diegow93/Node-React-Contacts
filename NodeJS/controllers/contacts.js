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

module.exports = {
    addContact,
    removeContact
}
