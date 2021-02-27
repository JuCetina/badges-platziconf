import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';

export default function BadgesList({ badges }){
    if(badges.length === 0){
        return( 
            <>
                <h3>No badges were found</h3>
                <Link to="badges/new" className="btn btn-primary">
                    Create the first Badge!
                </Link>
            </>
        )
    }

    return(
        <ul>
            {badges.map((badge) => {
                return(
                    <div className="BadgeItem" key={badge.id}>
                        <div>
                            <img className="BadgeItem__avatar" src={badge.avatarUrl} alt={`${badge.firstName} ${badge.lastName} Avatar`}/>
                        </div>
                        <div>
                            <li className="BadgeItem__detail">
                                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                                    <p><strong>{badge.firstName} {badge.lastName}</strong></p>
                                    <p className="BadgeItem__detail-twitter"><span className="BadgeItem__twitterIcon"></span>@{badge.twitter}</p>
                                    <p>{badge.jobTitle}</p>
                                </Link>
                            </li>
                        </div>
                    </div>
                )
            })}
        </ul>
    )
}