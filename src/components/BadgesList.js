import React from 'react';

import './styles/BadgesList.css';

export default function BadgesList({badges}){
    return(
        <ul>
            {badges.map((badge) => {
                return(
                    <div className="BadgeItem" key={badge.id}>
                        <div>
                            <img className="BadgeItem__avatar" src={badge.avatarUrl} alt={badge.firstName}/>
                        </div>
                        <div>
                            <li className="list-unstyled BadgeItem__detail">
                                <p><strong>{badge.firstName} {badge.lastName}</strong></p>
                                <p className="BadgeItem__detail-twitter"><span className="BadgeItem__twitterIcon"></span>@{badge.twitter}</p>
                                <p>{badge.jobTitle}</p>
                            </li>
                        </div>
                    </div>
                )
            })}
        </ul>
    )
}