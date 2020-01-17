import axios from 'axios'

let url = window.endpoints.url

let api = axios.create({
  baseURL: 'http://' + url + '/api/'
})

class Api {
  getContact = (id) => {
    return api.get('contacts', {
      params: {
        id: id
      }
    })
  }

  addContact = (firstName, lastName, address, phoneNumber) => {
    return api.post('contacts', {
      firstName: firstName,
      lastName: lastName,
      address: address,
      phoneNumber: phoneNumber
    })
  }

  removeContact = (id) => {
    return api.delete('contacts', {
      data: {
        id: id
      }
    })
  }

  editContact = (id, firstName, lastName, address, phoneNumber) => {
    return api.put('contacts', {
      id: id,
      firstName: firstName,
      lastName: lastName,
      address: address,
      phoneNumber: phoneNumber
    })
  }
}

export default Api
