const ApiHelper = {
  getSongs: () => {
    return fetch('http://localhost:8080/api/v1/playlist')
      .then((response) => response.json())
  }
}

export default ApiHelper