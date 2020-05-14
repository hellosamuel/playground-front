class Api {
  constructor() {
    const {
      location: { protocol, hostname },
    } = window

    this.baseUrl = ''
    if (process.env.NODE_ENV === 'production') {
      this.baseUrl = `${protocol}//${hostname}`
    }
  }
}

export default Api
