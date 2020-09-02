import React from 'react'
import { screen, render } from '@testing-library/react'
import "@testing-library/jest-dom";
import SongTable from './SongTable'

describe('SongTable: songs on the DOM', () => {

  let songs 
  
  beforeEach(() => {
    songs = [{
      "songName": "Swear",
      "artistName": "Casiopea",
      "link": "https://www.youtube.com/watch?v=6GEI3PpXEAo&t=1771s",
      "id": 1
    }, {
      "songName": "Autumn Leaves",
      "artistName":
        "Bill Evans Trio",
      "link": "https://www.youtube.com/watch?v=r-Z8KuwI7Gc",
      "id": 2
    }]  

    render(<SongTable songQueue={songs}/>)
  })


})