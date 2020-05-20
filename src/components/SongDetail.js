import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div>Select a Song</div>
    );
  }
  const { title, group, year } = song;
  return (
    <div className="song-detail">
      <h1>Song Description:</h1>
      <div>Title: {title}</div>
      <div>Group: {group}</div>
      <div>Year: {year}</div>      
    </div>
  );
}

const mapStateToProps = state => ({
  song: state.selectedSong,
});

export default connect(mapStateToProps, null)(SongDetail);
