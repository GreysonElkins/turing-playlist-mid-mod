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

  it(`should populate a table with 2 rows plus however many rows
    per songs, (in this case 2)`, () => {
      const table = screen.getByRole('table')
      const rows = screen.getAllByRole('row')
      expect(table).toBeInTheDocument()
      expect(rows).toHaveLength(4)
    })

  it(`should have a title "songs" in row 1, and specific column headers in row 2`, () => {
    const rows = screen.getAllByRole('row')
    const titleRow = screen.getByRole('row', { name: 'Songs' })
    const songCell = screen.getByRole('cell', { name: 'Song' })
    const artistCell = screen.getByRole('cell', { name: 'Artist' })
    expect(rows[0] === titleRow).toBe(true)
    expect(songCell).toBeInTheDocument()
    expect(artistCell).toBeInTheDocument()
  })


})