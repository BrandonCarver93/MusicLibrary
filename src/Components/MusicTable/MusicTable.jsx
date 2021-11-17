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
        <table class="table table-bordered">
          <thead>
              <tr>
                <th scope="col">Song Title</th>
                <th scope="col">Album</th>
                <th scope="col">Artist</th>
                <th scope="col">Genre</th>
                <th scope="col">Release Date</th>
              </tr>
              {renderedMusic}
            </thead>
        </table>
    );
};

export default MusicTable;