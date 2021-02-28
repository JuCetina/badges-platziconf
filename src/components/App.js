import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import BadgesListPage from '../pages/BadgesListPage';
import BadgePage from '../pages/BadgePage';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';
import BadgeEdit from '../pages/BadgeEdit';
import NotFound from '../pages/NotFound';


export default function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/badges" component={BadgesListPage} />
                    <Route exact path="/badges/new" component={BadgePage} />
                    <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
                    <Route exact path="/badges/:badgeId/edit/" component={BadgeEdit} />
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}