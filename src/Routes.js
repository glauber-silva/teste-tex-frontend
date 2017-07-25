import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './modules/App';
import Home from './modules/home/index';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
    </Route>
);
