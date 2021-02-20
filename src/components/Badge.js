import React from 'react';

import "./styles/Badge.css";
import confLogo from '../images/badge-header.svg';

///export default function Badge(props) {
export default function Badge({avatarUrl, firstName, lastName, jobTitle, twitter}) {

    //const {firstName, lastName} = props;
    
    //const firstName = 'Victoria';
    //const lastName = 'Cárdenas';

    return(
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia"/>
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src={avatarUrl} alt="Avatar"/>
                <h1>{firstName} <br/> {lastName}</h1>
            </div>
            <div className="Badge__section-info">
                <h3>{jobTitle}</h3>
                <div>@{twitter}</div>
            </div>
            <div className="Badge__footer">
                #TheConf
            </div>
        </div>
    )
}

