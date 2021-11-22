import React, { Component } from 'react';
import './App.css'

import NavBar from './NavBar/Navbar';
import MusicTable from './MusicTable/MusicTable'
import Footer from './Footer/Footer'
import SongCreator from './SongCreator/SongCreator'

import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        this.fetchMusic();
    }

    filterMusic = (searchTerm) => {
        let filteredMusic = this.state.songs.filter((song) => {
                return (
                    song.title.toLowerCase().includes(searchTerm.toLowerCase()) || song.album.toLowerCase().includes(searchTerm.toLowerCase()) || song.artist.toLowerCase().includes(searchTerm.toLowerCase()) || song.genre.toLowerCase().includes(searchTerm.toLowerCase()) || song.releaseDate.toLowerCase().includes(searchTerm.toLowerCase())
                );  
            }); 
        this.setState({
                songs: filteredMusic,
        
            });
    
    };

    async fetchMusic() {
        try {
            let response = await axios.get("http://localhost:3000/api/songs")
                this.setState({
                    songs: response.data,
                })
        }   catch (error) {
            }
    }

    createSong = (newSong) => {
        this.songs.push(newSong);

    }
    
    render() {
        return(
            <div className="bg_image">
                <div className="App">
                    <NavBar filterMusic = {this.filterMusic}/>
                    <MusicTable songs={this.state.songs} />
                    <SongCreator createNewSong={this.createSong} />
                    <Footer />
                </div>
            </div>
        );
    }
}
export default App;