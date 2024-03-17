import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import BodyClass from "../../bodyClass";
import { Outlet } from 'react-router-dom';


const Layout = ({ props, children }) => {
    return (
        <div id="pageWrapper">
            <main className="posRelative">
                <Outlet />
                <BodyClass />
                <Sidebar />
                <Header />
                <div>{children}</div>
            </main>
        </div>
    );
};

export default Layout;
