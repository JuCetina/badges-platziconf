import React from 'react';

import './styles/PageError.css';

export default function PageError({error}){
    return(
        <div className="PageError">
            {error}
        </div>
    )
}