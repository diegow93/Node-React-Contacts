import React, { Component } from 'react'
import './App.css'
import { Container } from 'reactstrap'
import ContactsTable from './ContactsTable.jsx'
import EditCreate from './EditCreate.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid={false}>
          <Route exact path="/" component={ContactsTable} />
          <Route exact path="/editcreate/" component={EditCreate} />
        </Container>
      </Router>
    )
  }
}

export default App
