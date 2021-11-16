import React, { Component } from 'react';

import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.fetchMusic();
    }

    async fetchMusic(){
        try {
            let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music")
            console.log(response)
        }   catch (error) {
            console.log(error)
        }
    }

    render() {
        return(
            <div className="App">
                <h1>Hello world</h1>
            </div>
        );
    }

}
export default App;