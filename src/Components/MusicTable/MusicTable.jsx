import React from 'react';

const MusicTable = (props) => {
    let renderedMusic = props.songs.map((song) => {
        return (
            <tr>
            <td>{song.title}</td>
            <td>{song.album}</td>
            <td>{song.artist}</td>
            <td>{song.genre}</td>
            <td>{song.releaseDate}</td>
          </tr>
        );
    });
    return (
        <table>
  <tr>
    <th>Song Title</th>
    <th>Album</th>
    <th>Artist</th>
    <th>Genre</th>
    <th>Release Date</th>
  </tr>
{renderedMusic}
</table>
    );
};

export default MusicTable;