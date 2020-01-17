import React, { Component } from 'react'
import './App.css'
import { Container } from 'reactstrap'
import ContactsTable from './ContactsTable.jsx'
import Api from './api/Api.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: null
    }
  }

  componentDidMount() {
    this.apiCallGetContact('all')
  }

  apiCallGetContact = async (id) => {
    const api = new Api()
    try {
      const result = await api.getContact(id)
      const { data } = await result
      this.setState({
        contacts: data
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    if (this.state.contacts === null) {
      return <h3>Loading...</h3>
    } else {
      return (
        <Container className="themed-container" fluid={false}>
          <div className="header">
            <h3>Contacts</h3>
          </div>
          <ContactsTable
            className="contacts-table"
            contacts={this.state.contacts}
          />
        </Container>
      )
    }
  }
}

export default App
