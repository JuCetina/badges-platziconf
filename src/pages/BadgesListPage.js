import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesListPage.css'

import PageLoading from '../components/PageLoading';
import MiniLoader from '../components/MiniLoader';
import PageError from '../components/PageError';

import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';

import api from '../api';

export default function BadgesListPage(){
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ data, setData ] = useState([]);

    useEffect( () => {
        const idInterval = setInterval(
            async () => {
        
                setLoading(true);
                setError(null);
                
                try{
                    const badgesList = await api.badges.list();
                    setLoading(false);
                    setData(badgesList);
                } catch(error){
                    setLoading(false);
                    setError(error);
                }
            }
        , 5000);
        return () => clearInterval(idInterval);
    }
    , []);

    if(loading === true && data.length === 0){
        return <PageLoading />;
    }

    if(error){
        return <PageError error={error.message}/>;
    }

    return(
        <>
            <div>
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img className="Badges_conf-logo" src={confLogo} alt="Logo de la conferencia" />
                    </div>
                </div>
            </div>

            <div className="Badges__container">
                <div className="Badges__buttons">
                    <Link className="btn btn-primary" to="/badges/new">
                        New Badge
                    </Link>
                </div>
                
                <BadgesList badges={data}/>
                
                {loading && <MiniLoader />}
                
            </div>
        </>
    )
}