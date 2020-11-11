import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "./components/Home";

import Component1 from "./components/Session1/1";
import Component2 from "./components/Session1/2";
import Component3 from "./components/Session1/3";
import Component4 from "./components/Session1/4";
import Component5 from "./components/Session1/5";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>

                <Route path="/1" component={Component1}/>
                <Route path="/2" component={Component2}/>
                <Route path="/3" component={Component3}/>
                <Route path="/4" component={Component4}/>
                <Route path="/5" component={Component5}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;