import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongList = ({ songList, selectSong }) => {
  const renderSongList = songList.map(song => (
    <div>
      <h2>{song.title}</h2>
      <button
        type="button"
        onClick={() => selectSong(song)}
      >
        Select
      </button>
    </div>
  ));

  return (
    <div>{renderSongList}</div>
  );
}

const mapStateToProps = state => ({
  songList: state.songList,
});

export default connect(mapStateToProps, { selectSong })(SongList);
