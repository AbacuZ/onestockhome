import axios from 'axios'

const axiosSuccess = result => {
  return result
}

const axiosError = error => {
  console.log('axios error', error)
}

const axiosService = () => {
  return {
    get: (url, headers) => {
      return axios
        .get(url, headers)
        .then(axiosSuccess)
        .catch(axiosError)
    }
  }
}

const apiService = () => {
  return {
    get: ({ url, headers }) => axiosService().get(url, headers)
  }
}

export default apiService
