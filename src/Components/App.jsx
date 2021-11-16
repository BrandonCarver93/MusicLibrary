import React, { Component } from 'react';
import './App.css'
import Header from './Header/Header';
import NavBar from './NavBar/Navbar';
import MusicTable from './MusicTable/MusicTable'
import Footer from './Footer/Footer'

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

    async fetchMusic(){
        try {
            let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music")
            console.log(response.data);
            this.setState({
                songs: response.data,
            })
        }   catch (error) {
            console.log(error)
        }
    }

    render() {
        console.log(this.state)
        return(
            <div className="container-fluid">
                <Header />
                <NavBar />
                <MusicTable songs={this.state.songs} />
              <Footer />
            </div>
        );
    }

}
export default App;