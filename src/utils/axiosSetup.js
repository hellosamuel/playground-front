import axios from 'axios'

export default function axiosSetup() {
  const {
    location: { protocol, hostname },
  } = window

  let baseURL = ''
  if (process.env.NODE_ENV === 'production') {
    baseURL = `${protocol}//${hostname}`
  }
  axios.defaults.baseURL = baseURL
}
