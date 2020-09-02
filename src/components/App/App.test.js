import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import App from './App';
// jest.mock('../SongSubmit/SongSubmit.js')

test('true should be true', () => {
  expect(true).toEqual(true);
});

describe('App integration', () => {

  let songInput, artistInput, linkInput, addSongButton

  beforeEach(() => {
    render(<App />)

    songInput = () => screen.getByPlaceholderText('Song Title')
    artistInput = () => screen.getByPlaceholderText('Artist')
    linkInput = () => screen.getByPlaceholderText('Link to Listen')
    addSongButton = screen.getByRole('button', { name: 'Add Song' })

    // const button = screen.getByRole('button', { name: 'Add Song' })
    fireEvent.change(songInput(), { target: { value: 'Traipse of Youth' } })
    fireEvent.change(artistInput(), { target: { value: 'Feral Suits' } })
    fireEvent.change(linkInput(), { target: { value: 'Bandcamp.com' } })
  })
  
  it('A user should be able to type into the form', () => {
    expect(songInput().value).toBe('Traipse of Youth')
    expect(artistInput().value).toBe('Feral Suits')
    expect(linkInput().value).toBe('Bandcamp.com')
  })
  
  it('Clicking add song should add song to playlist with the form info', () => {
    fireEvent.click(addSongButton)
    expect(screen.getByText('Feral Suits')).toBeInTheDocument()
    expect(screen.getByText('Traipse of Youth')).toBeInTheDocument()
  })
  
  it('Should clear the input fields when add song is clicked', () => {
    fireEvent.click(addSongButton)
    expect(songInput().value).toBe('')
    expect(artistInput().value).toBe('')
    expect(linkInput().value).toBe('')
  })

})
