import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
import './ContactsTable.css'
import Api from './api/Api.js'
import { Link } from 'react-router-dom'

class ContactsTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: null
    }
  }

  componentDidMount() {
    this.apiGetContact('all')
  }

  apiGetContact = async (id) => {
    const api = new Api()
    try {
      const result = await api.getContact(id)
      const { data } = result
      this.setState({
        contacts: data
      })
    } catch (error) {
      console.log(error)
    }
  }

  apiRemoveContact = async (id) => {
    const api = new Api()
    try {
      await api.removeContact(id)
      const result = await api.getContact('all')
      const { data } = result
      this.setState({
        contacts: data
      })
    } catch (error) {
      console.log(error)
    }
  }

  content = (contacts) => {
    return contacts.map((contact) => {
      return (
        <tr key={contact.id}>
          <td>{contact.firstname}</td>
          <td>{contact.lastname}</td>
          <td>{contact.address}</td>
          <td>{contact.phonenumber}</td>
          <td>
            <Link
              to={{
                pathname: '/editcreate',
                state: {
                  id: contact.id,
                  firstName: contact.firstname,
                  lastName: contact.lastname,
                  address: contact.address,
                  phoneNumber: contact.phonenumber,
                  action: 'edit'
                }
              }}
            >
              <Button color="warning">Edit</Button>{' '}
            </Link>
            <Button
              color="danger"
              onClick={() => this.apiRemoveContact(contact.id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      )
    })
  }

  render() {
    if (this.state.contacts === null) {
      return <h3>Loading...</h3>
    } else {
      return (
        <div className="contacts-container">
          <div className="header">
            <h3>Contacts</h3>
          </div>
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
            <tbody>{this.content(this.state.contacts)}</tbody>
          </Table>
          <Link
            to={{
              pathname: '/editcreate',
              state: {
                id: '',
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: '',
                action: 'add'
              }
            }}
          >
            <Button className="add-contact-button" color="success">
              Add contact
            </Button>
          </Link>
        </div>
      )
    }
  }
}

export default ContactsTable
