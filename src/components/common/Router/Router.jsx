import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Characters from "../../../pages/Characters/Characters";
import Locations from "../../../pages/Locations/Locations";
import WatchList from "../../../pages/WatchList/WatchList";
import Episodes from "../../../pages/Episodes/Episodes";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={ <Navigate to='/characters' replace={true} /> } />
            <Route path='/characters' element={ <Characters /> } />
            <Route path='/episodes' element={ <Episodes /> } />
            <Route path='/locations' element={ <Locations /> } />
            <Route path='/watchlist' element={ <WatchList /> } />
            <Route path='*' element={ <Navigate to='/' replace={true} /> } />
        </Routes>
    );
};

export default Router;
