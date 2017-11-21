import axios from 'axios'

export default {
  fetchSplit() {
    return axios.get('/static/sample.lss')
      .catch(error => {
        console.log(error)
      })
  }
}
