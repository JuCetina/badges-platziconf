import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';

function useSearchBadges(badges){
    const [ query, setQuery ] = useState('');
    const [ filteredBadges, setFilteredBadges] = useState(badges);

    useMemo(() => {
            const result = badges.filter(badge => {
                return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
            });
            setFilteredBadges(result);
    }
    , [ badges, query ]);

    return { query, setQuery, filteredBadges };
}

export default function BadgesList({ badges }){

    const { query, setQuery, filteredBadges } = useSearchBadges(badges);

    const handleChange = e => {
        setQuery(e.target.value);
    }

    if(filteredBadges.length === 0){
        return( 
            <>
                <div className="form-group">
                    <label>FilterBadges</label>
                    <input type="text" className="form-control" value={query} onChange={handleChange} />
                </div> 
                <h3>No badges were found</h3>
                <Link to="badges/new" className="btn btn-primary">
                    Create the first Badge!
                </Link>
            </>
        )
    }

    return(
        <>
            <div className="form-group">
                <label>FilterBadges</label>
                <input type="text" className="form-control" value={query} onChange={handleChange} />
            </div> 
            <ul className="list-unstyled">
                {filteredBadges.map((badge) => {
                    return(
                        <div className="BadgeItem" key={badge.id}>
                            <div>
                                <img className="BadgeItem__avatar" src={badge.avatarUrl} alt={`${badge.firstName} ${badge.lastName} Avatar`}/>
                            </div>
                            <div>
                                <li className="BadgeItem__detail">
                                    <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
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
        </>
    )
}