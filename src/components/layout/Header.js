import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="mainHeader d-flex justify-content-between align-items-center">
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="mainLogo">
                        <img src="assets/images/logo-white.svg" alt="" />
                    </div>
                    <div className="rightContent d-flex">
                        <ul className="top-menu">
                            <li> <Link to=""><i className="fas fa-bell"></i></Link> </li>
                            <li> <Link to=""><i className="fas fa-sign-in-alt"></i></Link> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
