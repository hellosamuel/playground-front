class Api {
  constructor() {
    const {
      location: { protocol, hostname },
    } = window

    let port = ':8000'
    this.baseUrl = ''
    if (process.env.NODE_ENV === 'production') {
      port = ''
      this.baseUrl = `${protocol}//${hostname}${port}`
    }
  }
}

export default Api
