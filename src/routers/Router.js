import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../components/Header';
import Container from '../components/Container';
import MoonPage from '../components/MoonPage';
import EarthPage from '../components/EarthPage';
import NotFoundPage from '../components/NotFoundPage';

const Router = () => (
        <BrowserRouter>
        <Header />
            <Switch>
                <Route path="/" exact={true} component={Container} />
                <Route path="/earth" component={EarthPage} />
                <Route path="/moon" component={MoonPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
);

export default Router;