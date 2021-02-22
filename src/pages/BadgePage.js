import React, { useState } from 'react';

import './styles/BadgePage.css';

import header from '../images/badge-header.svg';

import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';


export default function BadgePage(){

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ jobTitle, setJobTitle ] = useState('');
    const [ twitter, setTwitter ] = useState('');

    const handleChange = (e) => {
        switch(e.target.name){
            case "firstName":
                setFirstName(e.target.value);
                break;
            case "lastName":
                setLastName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "jobTitle":
                setJobTitle(e.target.value);
                break;
            case "twitter":
                setTwitter(e.target.value);
                break;
        }
        // console.log(firstName, lastName, email, jobTitle, twitter);
    }

    return (
        <div>
            <Navbar />
            <div className="BadgePage__hero">
                <img src={header} alt="Logo de la conferencia" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge avatarUrl="https://picsum.photos/200" firstName={firstName} lastName={lastName} jobTitle={jobTitle} twitter={twitter}/>
                    </div>
                    <div className="col-6">
                        <BadgeForm onChange={handleChange} firstName={firstName} lastName={lastName} email={email} jobTitle={jobTitle} twitter={twitter}/>
                    </div>
                </div>
            </div>
        </div>
    )
}