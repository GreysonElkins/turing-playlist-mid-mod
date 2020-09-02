import React from 'react'
import './SongTable.css'

const SongTable = ({ allSongs }) => {

  const tableRowsWithSongs = allSongs.map(song => {
    // return a movieCard
  })

  return (
    <table>
      <thead>
        <tr> Songs </tr>
      </thead>
      <tbody>
        <tr>
          <td>Song</td>
          <td>Artist</td>
          <td>Listen</td>
        </tr>
        {tableRowsWithSongs}
      </tbody>
    </table>
  )
}

export default SongTable