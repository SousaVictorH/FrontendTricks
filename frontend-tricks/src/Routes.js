import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "./components/Home";
import NotFound from "./components/NotFound";

import Component1 from "./components/Session1/1";
import Component2 from "./components/Session1/2";
import Component3 from "./components/Session1/3";
import Component4 from "./components/Session1/4";
import Component5 from "./components/Session1/5";

import Component6 from "./components/Session2/6";
import Component7 from "./components/Session2/7";
import Component8 from "./components/Session2/8";
import Component9 from "./components/Session2/9";
import Component10 from "./components/Session2/10";

import Component11 from "./components/Session3/11";
import Component12 from "./components/Session3/12";

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

                <Route path="/6" component={Component6}/>
                <Route path="/7" component={Component7}/>
                <Route path="/8" component={Component8}/>
                <Route path="/9" component={Component9}/>
                <Route path="/10" component={Component10}/>

                <Route path="/11" component={Component11}/>
                <Route path="/12" component={Component12}/>

                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;