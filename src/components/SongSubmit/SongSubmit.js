import React, { Component } from 'react'

class SongSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestedSong: '',
      suggestedArtist: '',
      suggestedListen: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  clearInputs = () => {
    const inputs = document.querySelectorAll('input') 
    for(let i = 0; i < inputs.length; i++) {
      inputs[i].value = ''
    }
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
        <button
          onClick={() => {
            this.props.addSongToPlaylist(this.state)
            this.clearInputs()
            // clear inputs
          }}
        >
          Add Song
        </button>
      </>
    )
  }
}

export default SongSubmit