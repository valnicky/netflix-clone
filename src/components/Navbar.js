import React from 'react'
import '../Navbar.css';

function Navbar() {
    return (
        <div className= "navbar">
            <img className="navbar__logo" src="../img/netflix.png" alt="Netflix Logo" />
            <img src="../img/avatar.png" alt="Netflix Avatar" className="navbar__avatar" />
        </div>
    )
}

export default Navbar
