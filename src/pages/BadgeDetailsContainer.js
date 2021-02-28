import React, { useState, useEffect } from 'react';

import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import BadgeDetails from './BadgeDetails';

import api from '../api';


export default function BadgeDetailsContainer(props){
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ data, setData ] =  useState([]);

    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    useEffect( 
        async () => {
            setLoading(true);
            setError(null);

            try{
                const badge = await api.badges.read(props.match.params.badgeId);
                setData(badge);
                setLoading(false);
            } catch(error){
                setError(error);
                setLoading(false);
            }
        }
    , []);

    const handleOpenModal = e => {
       setModalIsOpen(true);
    }

    const handleCloseModal = e => {
        setModalIsOpen(false);
    }

    const handleDeleteBadge = async e => {
        setLoading(true);
        setError(null);
        try{
            await api.badges.remove(props.match.params.badgeId);
            setLoading(false);
            props.history.push('/badges');
        } catch(error){
            setError(error);
            setLoading(false);
        }
    }

    if(loading){
        return <PageLoading />
    }

    if(error){
        return <PageError error={error.message} />
    }

    return(
        <BadgeDetails data={data} onCloseModal={handleCloseModal} onOpenModal={handleOpenModal} modalIsOpen={modalIsOpen} onDelete={handleDeleteBadge}/>
    )
} 