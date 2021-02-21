import React from 'react';

import './styles/BadgePage.css';

import header from '../images/badge-header.svg';

import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';


export default function BadgePage(){
    return (
        <div>
            <Navbar />
            <div className="BadgePage__hero">
                <img src={header} alt="Logo de la conferencia" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge avatarUrl="https://picsum.photos/200" firstName="Juan" lastName="Pérez" jobTitle="Web developer" twitter="jperez"/>
                    </div>
                    <div className="col-6">
                        <BadgeForm />
                    </div>
                </div>
            </div>
        </div>
    )
}