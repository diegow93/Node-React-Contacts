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
}

export default Api
