import React from "react";
import { logout } from "../../../api/services/logoutUser";
import { Link, useLocation } from "react-router-dom";

const Sidebar = (props) => {
    const location = useLocation();

    const isRouteActive = (route) => {
        return location.pathname === route;
    };

    // all routes array along with permission and roles
    const routes = [
        { path: "/dashboard", label: "Dashboard" },
        { path: "/temperature", label: "Temperature" },
        { path: "/log-out", label: "Log Out", onClick: logout },
    ];

    return (
        <nav className="sideNavbar">
            <div className="navbarCollapse" id="navbarCollapse">
                <ul className="listUnstyled navbarNav">
                    {routes.map((route, index) => (
                        <React.Fragment key={index}>
                            {route.onClick ? (
                                <li className={isRouteActive(route.path) ? "active" : ""}>
                                    <a href="#" onClick={route.onClick}>{route.label}</a>
                                </li>
                            ) : route.label !== 'Divider' && (
                                <li className={isRouteActive(route.path) ? "active" : ""}>
                                    <Link to={route.path}>{route.label}</Link>
                                </li>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar;