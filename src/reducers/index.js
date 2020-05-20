import { combineReducers } from 'redux';

const songListReducer = () => (
  [
    { title: 'Angel of Death', group: 'Slayer', year: '1986' },
    { title: 'Run to the Hills', group: 'Iron Maiden', year: '1982' },
    { title: 'Caught in a Mosh', group: 'Anthrax', year: '2016' },
    { title: 'Breaking the Law', group: 'Judas Priest', year: '1980' },
    { title: 'Holy Wars', group: 'Megadeth', year: '1990' },
  ]
);

const selectedSongReducer = (song = null, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;
    default:
      return song;
  }
}

export default combineReducers({
  songList: songListReducer,
  selectedSong: selectedSongReducer,
});
