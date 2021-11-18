import React, { Component } from 'react';

class SearchBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
           filterSongs: "",
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filterSongs(this.state.filterSongs);
    };
    render() {
        return (
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form onSubmit={this.handleSubmit} class="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="filterSongs" value={this.state.filterSongs} onChange={this.handleChange} />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        );
    }
}


export default SearchBar;

