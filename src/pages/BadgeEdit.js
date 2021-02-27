import React, { useEffect, useState } from 'react';

import './styles/BadgeEdit.css';

import header from '../images/platziconf-logo.svg';

import PageLoading from '../components/PageLoading';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import api from '../api';


export default function BadgeEdit(props){

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ jobTitle, setJobTitle ] = useState('');
    const [ twitter, setTwitter ] = useState('');
    const avatarUrl = "https://picsum.photos/80";

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState('');

    useEffect(
        async () => {
            
            setLoading(true);
            setError('');

            try{
                const badge = await api.badges.read(props.match.params.badgeId);
                setLoading(false);

                setFirstName(badge.firstName);
                setLastName(badge.lastName);
                setEmail(badge.email);
                setJobTitle(badge.jobTitle);
                setTwitter(badge.twitter);

            } catch(error){
                setLoading(false);
                setError(error);
            }
        }
    , []);

    const handleChange = e => {
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
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try{
            await api.badges.update(props.match.params.badgeId, {firstName, lastName, email, jobTitle, twitter, avatarUrl});
            setLoading(false);
            props.history.push('/badges');
        } catch(error){
            setLoading(false);
            setError(error);
        }
    }

    if(loading){
        return <PageLoading />
    }

    return (
        <>
            <div className="BadgeEdit__hero">
                <img className="BadgeEdit__hero-image" src={header} alt="Logo de la conferencia" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge avatarUrl={avatarUrl} firstName={firstName || 'First_Name'} lastName={lastName || 'Last_Name'} jobTitle={jobTitle || 'Job_Title'} twitter={twitter || 'Twitter_Account'}/>
                    </div>
                    <div className="col-6">
                        <h1>Edit Attendant</h1>
                        <BadgeForm onChange={handleChange} onSubmit={handleSubmit} firstName={firstName} lastName={lastName} email={email} jobTitle={jobTitle} twitter={twitter} error={error.message}/>
                    </div>
                </div>
            </div>
        </>
    )
}