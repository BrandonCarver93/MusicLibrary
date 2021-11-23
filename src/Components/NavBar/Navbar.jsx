import React from 'react';
import SearchBar from '../SearchBar/SearchBar'

function NavBar(props){
    return(
      <div className="nav-bar">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">      
  <div class="container-fluid">
      <a class="navbar-brand" href="http://localhost:3000/">Music Library</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> 
      <SearchBar filterSongs={props.filterMusic} />
  </div>
</nav>
</div>
    )
}

export default NavBar;