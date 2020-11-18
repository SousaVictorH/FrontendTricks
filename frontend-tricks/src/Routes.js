import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "./components/Home";
import NotFound from "./components/NotFound";

import button1 from "./components/buttons/button1";
import button2 from "./components/buttons/button2";
import button3 from "./components/buttons/button3";

import login1 from "./components/login/login1";

import card1 from "./components/cards/card1";
import card2 from "./components/cards/card2";
import card3 from "./components/cards/card3";
import card4 from "./components/cards/card4";
import card5 from "./components/cards/card5";
import card6 from "./components/cards/card6";

import animation1 from "./components/animations/animation1";

import loading1 from "./components/loading/loading1";
import loading2 from "./components/loading/loading2";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>

                <Route path="/buttons/1" component={button1}/>
                <Route path="/buttons/2" component={button2}/>
                <Route path="/buttons/3" component={button3}/>

                <Route path="/login/1" component={login1}/>

                <Route path="/cards/1" component={card1}/>
                <Route path="/cards/2" component={card2}/>
                <Route path="/cards/3" component={card3}/>
                <Route path="/cards/4" component={card4}/>
                <Route path="/cards/5" component={card5}/>
                <Route path="/cards/6" component={card6}/>

                <Route path="/animations/1" component={animation1}/>

                <Route path="/loading/1" component={loading1}/>
                <Route path="/loading/2" component={loading2}/>
                
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;