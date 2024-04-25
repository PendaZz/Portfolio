import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-light gradient-custom ">
            <a className="navbar-brand" href="/">My Portfolio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="Resume">Resume</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="Portfolio">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="About">About</NavLink>
                    </li>
                </ul>
            </div>
            <a>still under construction</a>
        </nav>
    );

};

export default Header;
