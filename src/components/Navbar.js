import React, {useState, useEffect} from 'react'
import '../Navbar.css';
import imgLogo from '../img/netflix.png';
import  imgAvatar from '../img/avatar.png';

function Navbar() {
    const [show, handleShow] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return ( ) => {
            window.removeEventListener("scroll");
        }
    }, []);
    
    return (
        <div className= {`navbar ${show && "navbar__black"}`}>
            <img className="navbar__logo" src={imgLogo} alt="Netflix Logo" />
            <img src={imgAvatar} alt="Netflix Avatar" className="navbar__avatar" />
        </div>
    )
}

export default Navbar
