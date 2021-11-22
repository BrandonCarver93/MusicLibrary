import React, { Component } from 'react';

class SongCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            album: '',
            artist: '',
            genre: '',
            releaseDate: ''

        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewSong(this.setState)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Song Title:</label>
                <input name="title" onChange={this.handleChange} value={this.state.title} />
                <label>Album:</label>
                <input name="album" onChange={this.handleChange} value={this.state.album} />
                <label>Artist:</label>
                <input name="artist" onChange={this.handleChange} value={this.state.artist} />
                <label>Genre:</label>
                <input name="genre" onChange={this.handleChange} value={this.state.genre} />
                <label>Release Date:</label>
                <input name="releaseDate" onChange={this.handleChange} value={this.state.releaseDate} />
                <button type="submit">Add Song</button>
            </form>
        )
    }
}

export default SongCreator;