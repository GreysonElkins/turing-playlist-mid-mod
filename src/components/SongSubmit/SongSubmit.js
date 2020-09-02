import React, { Component } from 'react'

class SongSubmit extends Component {
  constructor() {
    super();
    this.state = {
      suggestedSong: '',
      suggestedArtist: '',
      suggestedListen: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <>
      <h2>Add a song to the list!</h2>
        <input 
          name="suggestedSong"
          placeholder="Song title"
          onChange={this.handleChange}
          />
        <input 
          name="suggestedArtist"
          placeholder="Artist"
          onChange={this.handleChange}
          />
        <input 
          name="suggestedListen"
          placeholder="Link to Listen"
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </>
    )
  }
}

export default SongSubmit