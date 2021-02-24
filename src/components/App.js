import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BadgePage from '../pages/BadgePage';
import BadgesListPage from '../pages/BadgesListPage';


export default function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/badges" component={BadgesListPage} />
                <Route exact path="/badges/new" component={BadgePage} />
            </Switch>
        </BrowserRouter>
    )
}