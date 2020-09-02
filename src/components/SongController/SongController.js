import React from 'react';

const SongController = ( { nextSong } ) => {
  
  return (
    <div>
      <button
      onClick={nextSong}>
        Next Song
      </button>
    </div>
  );
};

export default SongController;
