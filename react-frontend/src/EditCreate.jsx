import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col
} from 'reactstrap'
import './EditCreate.css'
import { Link, Redirect } from 'react-router-dom'
import Api from './api/Api.js'

class EditCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.location.state.id,
      firstName: this.props.location.state.firstName,
      lastName: this.props.location.state.lastName,
      address: this.props.location.state.address,
      phoneNumber: this.props.location.state.phoneNumber,
      action: this.props.location.state.action,
      redirect: false
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleConfirm = async () => {
    const api = new Api()
    if (this.state.action === 'edit') {
      await api.editContact(
        this.state.id,
        this.state.firstName,
        this.state.lastName,
        this.state.address,
        this.state.phoneNumber
      )
    } else if (this.state.action === 'add') {
      try {
        await api.addContact(
          this.state.firstName,
          this.state.lastName,
          this.state.address,
          this.state.phoneNumber
        )
      } catch (error) {
        console.log(error)
      }
    }
    this.setState({
      redirect: true
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    return (
      <Container className="form-container">
        <Row>
          <Col
            className="form-column"
            xs={{ size: 7, offset: 2 }}
            sm={{ size: 7, offset: 2 }}
            md={{ size: 6, offset: 3 }}
            lg={{ size: 5, offset: 3 }}
            xl={{ size: 4, offset: 4 }}
          >
            <Form className="form-body">
              <FormGroup>
                <Label>First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Address</Label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Phone Number</Label>
                <Input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Form>
            <div className="buttons-container">
              <Link to="/">
                <Button color="secondary">Cancel</Button>
              </Link>{' '}
              {/*<Link to="/">*/}
              <Button color="success" onClick={this.handleConfirm}>
                Confirm
              </Button>
              {/*</Link>*/}
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default EditCreate
