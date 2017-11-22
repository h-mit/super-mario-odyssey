import axios from 'axios'

export default {
  fetchSplit() {
    return axios.get('https://www.dropbox.com/s/x4nm1q9qlekqs9d/smoAny.lss?dl=1')
      .catch(error => {
        console.log(error)
      })
  }
}
