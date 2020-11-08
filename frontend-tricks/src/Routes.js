import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "./components/Home";
import Component1 from "./components/Session1/1";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/1" component={Component1}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;