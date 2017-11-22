import axios from 'axios'

export default {
  fetchSplit() {
    return axios.get('https://raw.githubusercontent.com/h-mit/super-mario-odyssey/master/split/smoAny.lss')
      .catch(error => {
        console.log(error)
      })
  }
}
