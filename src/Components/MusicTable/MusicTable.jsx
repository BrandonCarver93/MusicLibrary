import React from 'react';
import './MusicTable.css'

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
      <div className="center">
        <table class="table table-dark table-striped">
          <thead>
              <tr>
                <th scope="col"><h4>Song Title</h4></th>
                <th scope="col"><h4>Album</h4></th>
                <th scope="col"><h4>Artist</h4></th>
                <th scope="col"><h4>Genre</h4></th>
                <th scope="col"><h4>Release Date</h4></th>
              </tr>
              {renderedMusic}
            </thead>
        </table>
      </div>
    );
};

export default MusicTable;