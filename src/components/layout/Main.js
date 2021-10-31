import React from 'react'
import { Redirect, Route } from 'react-router';
import Dashboard from '../dashboard/Dashboard';
import Gallery from '../gallery/Gallery';
import GalleryDetail from '../gallery/GalleryDetail';
import GalleryList from '../gallery/GalleryList';
import Login from '../login/Login';
import Measurements from '../measurements/Measurements';
import PageHeader from '../PageHeader';
import Plans from '../plans/Plans';
import Services from '../services/Services';
import StaticShops from '../static-shops/StaticShops';
import Users from '../users/Users';

function Main() {
    return (
        <main className="mainBar">
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/dashboard">
                <PageHeader heading={'Dashboard'} />
                <Dashboard /> 
            </Route>
            <Route exact path="/services">
                <PageHeader heading={'Services'} />
                <Services />
            </Route>
            <Route exact path="/static-shops">
                <PageHeader heading={'Static Shops'} />
                <StaticShops />
            </Route>
            <Route exact path="/gallery">
                <PageHeader heading={'Gallery'} />
                <Gallery />
            </Route>
            <Route exact path="/measurements">
                <PageHeader heading={'Measurements'} />
                <Measurements />
            </Route>
            <Route exact path="/plans">
                <PageHeader heading={'Plans'} />
                <Plans />
            </Route>
            <Route exact path="/my-users">
                <PageHeader heading={'My Users'} />
                <Users />
            </Route>
        </main>
    )
}

export default Main;
