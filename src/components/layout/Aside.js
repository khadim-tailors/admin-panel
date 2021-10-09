import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Aside() {
    return (
        <aside className="asideBar">
            <div className="adminProfile">
                <div className="icon">
                    <i className="fas fa-user"></i>
                </div>
                <h5>Khadim Tailors Admin</h5>
            </div>
            <ul className="menues">
                <li>
                    <NavLink to="/dashboard" activeClassName='active'>
                        <i className="fas fa-chart-bar"></i>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/services" activeClassName='active'>
                        <i className="fas fa-cogs"></i>
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/static-shops" activeClassName='active'>
                        <i className="fas fa-store"></i>
                        Static Shops
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/gallery" activeClassName='active'>
                        <i className="fas fa-images"></i>
                        Gallery
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/measurements" activeClassName='active'>
                        <i className="fas fa-ruler-combined"></i>
                        Measurements Icons
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/plans" activeClassName='active'>
                        <i className="fas fa-file-invoice-dollar"></i>
                        Plans
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-users" activeClassName='active'>
                        <i className="fas fa-users"></i>
                        My Users
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default Aside
