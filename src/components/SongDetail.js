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
    <div>
      <h1>Song Description:</h1>
      <p>
        Title: {title}
        Group: {group}
        Year: {year}
      </p>
    </div>
  );
}

const mapStateToProps = state => ({
  song: state.selectedSong,
});

export default connect(mapStateToProps, null)(SongDetail);
