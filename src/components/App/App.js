import React, { Component } from 'react';
import './App.css';
import ApiHelper from '../../ApiHelper/ApiHelper'
import SongSubmit from '../SongSubmit/SongSubmit'
import SongTablex from '../SongTable/SongTable'
import SongController from '../SongController/SongController';

class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: []
    }
  }

  componentDidMount() {
    ApiHelper.getSongs()
      .then((allFetchedSongs) => this.setState({songQueue: allFetchedSongs}))
  }

  addSongToPlaylist = ( {suggestedSong, suggestedArtist, suggestedListen } ) => {
    // check if form info is filled out
    const newSong = {
      songName: suggestedSong,
      artistName: suggestedArtist,
      link: suggestedListen,
    }
    const newQueue = this.state.songQueue.concat(newSong)
    this.setState({ songQueue: newQueue })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
            <SongSubmit 
              addSongToPlaylist={this.addSongToPlaylist}  
            />
            <SongTablex 
              songQueue={this.state.songQueue}
            />
          </main>
        </div> 
      </div>
    )
  }
}

export default App;
