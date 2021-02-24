import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import BadgePage from '../pages/BadgePage';
import BadgesListPage from '../pages/BadgesListPage';
import NotFound from '../pages/NotFound';


export default function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={BadgesListPage} />
                    <Route exact path="/badges/new" component={BadgePage} />
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}