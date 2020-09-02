import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom";
import SongSubmit from './SongSubmit'

describe('SongSubmit: Adding songs to the playlist', () => {
  
  let mockAddSong

  beforeEach(() => {
    mockAddSong = jest.fn()
    render(<SongSubmit addSongToPlaylist={mockAddSong}/>)
  })

  it('should render three inputs and a submit button to the page', () => {
    expect(screen.getAllByRole('textbox')).toHaveLength(3)
    expect(screen.getByRole('button', { name: 'Add Song' })).toBeInTheDocument()
  })

  it('should have inputs for song title, artist, and link for listening', () => {
    expect(screen.getByPlaceholderText('Song Title')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Artist')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Link to Listen')).toBeInTheDocument()
  })

  it('should fire add song when the submit button is clicked', () => {
    const addSongButton = screen.getByRole('button', { name: 'Add Song' })
    fireEvent.click(addSongButton)
    expect(mockAddSong).toBeCalledTimes(1)
  })
})