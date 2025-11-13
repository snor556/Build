import React from "react";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom' 

import ParentGreeting from './properties';
import ClickCounter from "./clickCounter";

 export default function Rrouter(){
    return(
        <BrowserRouter>
        <Router>
        <div>
            <nav>
                <link to = '/greet'>ParentGreeting</link>
                <link to = '/click'>ClickCounter</link> 
            </nav>
            <hr/>
            <Routes>
               <Route path ='/greet' element = {<ParentGreeting/>} />
               <Route path = '/click' element = {<ClickCounter/>}/>
            </Routes>
        </div>
        </Router>
        </BrowserRouter>
    );
}