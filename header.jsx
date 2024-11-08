import React, { useState } from 'react';
import '../styles/styleHeader.css';

function Header (){
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <div className="container head d-flex align-items-center justify-content-between">
            <h5 className="fw-bold text-dark">Portfolio</h5>
            
           

          
            <div className="d-flex align-items-center gap-3 social-search">
                <div className="social-icons d-flex align-items-center gap-2">
                    <a href="https://www.facebook.com" className="icon facebook" target="_blank"  rel="noopener noreferrer">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="mailto:your-email@example.com" className="icon email">
                        <i className="bi bi-envelope-fill"></i>
                    </a>
                    <a href="https://www.instagram.com" className="icon instagram" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
                <button className="btn btn-outline text-light" type="submit" style={{ backgroundColor: 'black' }}><a href='#contact'>Search</a></button>
            </div>
            


        
             <button className="menu-btn d-md-none" onClick={toggleNav}>
                <i className="bi bi-list text-light"></i> 
            </button>
            
        
            <ul className={`nav align-items-center ${isNavVisible ? 'show-nav' : ''}`}>
                <li className="nav-item">
                    <a className="nav-link active fw-bold text-dark" aria-current="page" href="#about">Accueil</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fw-bold text-dark" href="#info">Informations</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fw-bold text-dark" href="#services">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fw-bold text-dark" href="#projets">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fw-bold text-dark" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
