import React, { Component } from 'react';
import './App.css';
import ApiHelper from '../../ApiHelper/ApiHelper'
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
          </main>
        </div> 
      </div>
    )
  }
}

export default App;
