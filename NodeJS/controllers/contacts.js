const test = (req, res, db) => {
    db.query('INSERT INTO contacts (firstname, lastname, address, phonenumber) VALUES ($1, $2, $3, $4) RETURNING *', ['nombre2', 'apellido', 'aveida italia', '123456'], (err, result) => {
        if (err) {
            res.send(err)
          }
          res.send(result.rows[0])
      })
}

module.exports = {
    test
}