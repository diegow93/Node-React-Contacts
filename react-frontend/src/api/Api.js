import axios from 'axios'

let ip = 'localhost'
let port = '5001'

let api = axios.create({
  baseURL: 'http://' + ip + ':' + port + '/api/'
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
