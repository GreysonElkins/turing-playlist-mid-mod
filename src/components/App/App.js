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
    this.setQueueFromApi()
  }
  
  setQueueFromApi = () => {
    ApiHelper.getSongs()
      .then((allFetchedSongs) => this.setState({songQueue: allFetchedSongs}))
  }

  addSongToPlaylist = ( {suggestedSong, suggestedArtist, suggestedListen } ) => {
    // if(this.allInputsFilled([suggestedSong, suggestedArtist, suggestedListen])) {
        // not implemented before error message
      const newSong = {
        songName: suggestedSong,
        artistName: suggestedArtist,
        link: suggestedListen,
      }
      ApiHelper.postSong(newSong)
      const newQueue = this.state.songQueue.concat(newSong)
      this.setState({ songQueue: newQueue })
      this.setQueueFromApi()
    } 

  allInputsFilled = (inputs) => {
    let emptyData = inputs.filter(input => input === '')
    return emptyData.length > 0 ? false : true
  } 

  nextSong = () => {
    debugger
    const song = this.state.songQueue[0]
    const remainingQueue = this.state.songQueue.slice(1)
    console.log(remainingQueue)
    this.setState({ songQueue: remainingQueue })
    ApiHelper.deleteSong(song.id)
    this.setQueueFromApi()
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
            <SongController 
              nextSong={this.nextSong}
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
