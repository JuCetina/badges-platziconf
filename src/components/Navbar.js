import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';

import logo from '../images/logo.svg';

export default function Navbar(){
    return(
        <div className="Navbar">
            <div className="container-fluid">
                <Link className="Navbar__brand" to="/">
                    <img className="Navbar__brand-logo" src={logo} alt="Logo de la conferencia" />
                    <span className="font-weight-light">Conference</span>
                    <span className="font-weight-bold"> badges</span>
                </Link>
            </div>
        </div>
    )
}
