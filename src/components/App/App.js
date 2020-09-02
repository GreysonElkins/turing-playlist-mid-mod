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
      allSongs: [],     
      songQueue: []
    }
  }

  componentDidMount() {
    ApiHelper.getSongs()
      .then((allFetchedSongs) => this.setState({allSongs: allFetchedSongs}))
  }

  addSongToPlaylist = ( {suggestedSong, suggestedArtist, suggestedListen } ) => {
    // check if form info is filled out
    const newSong = {
      songName: suggestedSong,
      artistName: suggestedArtist,
      link: suggestedListen,
    }

    // const newQ = 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
            <SongSubmit />
            <SongTablex 
              allSongs={this.state.allSongs}
              addSongToPlaylist={this.addSongToPlaylist}  
            />
          </main>
        </div> 
      </div>
    )
  }
}

export default App;
