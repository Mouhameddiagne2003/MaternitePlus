import React from 'react';
import Home from '../pages/Home';
import Fonctionnalities from "../pages/Fonctionnalities";
import Contact from '../pages/Contact';
import Avantage from '../pages/Avantage';
import Login from '../pages/Login';
import {Routes, Route} from 'react-router-dom';


function Routers(props) {
    return (
         <Routes>
             < Route path="/" element={<Home/>} />
             < Route path="/home" element={<Home/>}/>
             < Route path="/fonctionnalities" element={<Fonctionnalities/>}/>
             < Route path="/contact" element={<Contact/>}/>
             < Route path="/avantage" element={<Avantage/>}/>
             <Route path="/login" element={<Login/>} />
         </Routes>
    );
}

export default Routers;