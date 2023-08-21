import React from "react";
import Navbar from './component/Navbar';
import { Outlet } from "react-router-dom";

function Layout() {
    return(
        <main>
           <Navbar />
           <Outlet />
        </main>
    );
}

export default Layout;