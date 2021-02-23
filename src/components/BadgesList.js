import React from 'react';

import './styles/BadgesList.css';

export default function BadgesList({badges}){
    return(
        <ul>
            {badges.map((badge) => {
                return(
                    <div className="Badge">
                        <div>
                            <img className="Badge__avatar" src={badge.avatarUrl} alt={badge.firstName}/>
                        </div>
                        <div>
                            <li className="list-unstyled Badge__detail" key={badge.id}>
                                <p><strong>{badge.firstName} {badge.lastName}</strong></p>
                                <p className="Badge__detail-twitter"><span className="Badge__twitterIcon"></span>@{badge.twitter}</p>
                                <p>{badge.jobTitle}</p>
                            </li>
                        </div>
                    </div>
                )
            })}
        </ul>
    )
}