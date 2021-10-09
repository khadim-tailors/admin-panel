import React from 'react'
import { Route } from 'react-router';
import Dashboard from '../dashboard/Dashboard';
import Gallery from '../gallery/Gallery';
import Measurements from '../measurements/Measurements';
import PageHeader from '../PageHeader';
import Plans from '../plans/Plans';
import Services from '../services/Services';
import StaticShops from '../static-shops/StaticShops';
import Users from '../users/Users';

function Main() {
    return (
        <main className="mainBar">
            <Route path="/dashboard">
                <PageHeader heading={'Dashboard'} />
                <Dashboard />
            </Route>
            <Route path="/services">
                <PageHeader heading={'Services'} />
                <Services />
            </Route>
            <Route path="/static-shops">
                <PageHeader heading={'Static Shops'} />
                <StaticShops />
            </Route>
            <Route path="/gallery">
                <PageHeader heading={'Gallery'} />
                <Gallery />
            </Route>
            <Route path="/measurements">
                <PageHeader heading={'Measurements'} />
                <Measurements />
            </Route>
            <Route path="/plans">
                <PageHeader heading={'Plans'} />
                <Plans />
            </Route>
            <Route path="/my-users">
                <PageHeader heading={'My Users'} />
                <Users />
            </Route>
        </main>
    )
}

export default Main;
