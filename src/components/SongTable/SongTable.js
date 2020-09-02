import React from 'react'
import './SongTable.css'

const SongTable = ({ songQueue }) => {

  const tableRowsWithSongs = songQueue.map(song => {
    return (
      <tr key={`${song.songName}info`}>
        <td>{song.songName}</td>
        <td>{song.artistName}</td>
        <td><a href={song.link}>Listen</a></td>
      </tr>
    )
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