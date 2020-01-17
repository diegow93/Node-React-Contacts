import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
import './ContactsTable.css'

class ContactsTable extends Component {
  content = (contacts) => {
    return contacts.map((contact) => {
      return (
        <tr key={contact.id}>
          <td>{contact.firstname}</td>
          <td>{contact.lastname}</td>
          <td>{contact.address}</td>
          <td>{contact.phonenumber}</td>
          <td>
            <Button color="warning">Edit</Button>{' '}
            <Button color="danger">Delete</Button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <Table className="contacts-table" hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{this.content(this.props.contacts)}</tbody>
        <Button className="addContact-button" color="success">
          Add contact
        </Button>
      </Table>
    )
  }
}

export default ContactsTable
