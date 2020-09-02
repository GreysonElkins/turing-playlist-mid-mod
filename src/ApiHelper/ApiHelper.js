const ApiHelper = {
  getSongs: () => {
    return fetch('http://localhost:8080/api/v1/playlist')
      .then((response) => response.json())
  },

  postSong: (song) => {
    try {
      return fetch('http://localhost:8080/api/v1/playlist', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(song)
      })
    } catch (error) {
      console.log(error)
    }
  },

  deleteSong: (id) => {
    try {
      return fetch(`http://localhost:8080/api/v1/playlist/${id}`, {
        method: 'Delete',
        headers: {
          "Content-Type": "application/json"
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default ApiHelper