import React, { Fragment } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { NavLink, Link, useHistory } from 'react-router-dom';

function Navbar() {
    let history = useHistory()
    function logOut() {
        history.push("/login")
    }
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark secondBgColor">
                <Link className="navbar-brand" to="/home">Cinema</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/upcoming">Upcoming</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/top_rated">Top Rated</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/now_playing">Now Playing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/popular">Popular</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies">Trending-Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tv">Trending-Tv</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/ibrahim-mohammed-306134209/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in nav-link fa-lg mr-2 mt-1 icon"></i></a>
                        </li>
                        <li className="nav-item">
                        <a href="https://github.com/ibrahimmohammed11" target="_blank" rel="noreferrer"><i className="fab fa-github nav-link fa-lg mr-2 mt-1 icon"></i></a>
                        </li>
                        <li className="nav-item">
                            <i className="fab fa-dribbble nav-link fa-lg mr-3 mt-1 icon"></i>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavDropdown title="Log Out">
                                <NavDropdown.Item onClick={logOut} >Log Out</NavDropdown.Item>
                            </NavDropdown>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}
export default Navbar;