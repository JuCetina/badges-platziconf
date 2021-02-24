import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';

import homeLogo from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg';

export default function Home() {
    return(
        <>
            <div className="Home">
                <div className="Home__text text-center">
                    <img src={homeLogo} alt="Logo de la conferencia" />
                    <h1 className="Home__text-title text-uppercase">Print your badges</h1>
                    <p className="Home__text-phrase">The easiest way to manage your conference</p>
                    <Link to="/badges" className="btn btn-primary">Start now</Link>
                </div>
                <div className="Home__astronauts">
                    <img src={astronauts} alt="" />
                </div>
            </div>
        </>
    )
}