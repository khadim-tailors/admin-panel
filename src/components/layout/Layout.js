import React from 'react'
import Aside from './Aside';
import Header from './Header';
import Main from './Main';

function Layout() {
    return (
        <>
            <Header />
            <section className="contentContainer d-flex">
                <Aside />
                <Main />
            </section>
        </>
    )
}

export default Layout;