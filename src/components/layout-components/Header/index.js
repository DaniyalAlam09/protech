import React, { useState, useEffect } from "react";
import Logo from "../../../assets/images/logo-white.svg";
import logo1 from "../../../assets/images/logo1.png";
import logo2 from "../../../assets/images/logo2.png";
import './header.css';
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Mobile menu toggle handler
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle('menuOpen', !menuOpen);
    };

    return (
        <nav className="navbarTop">
            <div className="navbarLogo">
                <Link to='/dashboard' className="dBlock"><img src={logo1} className="logo" alt="NOH" /></Link>
            </div>
            <div className="navbarNavIcns dFlex alignCenter">
                <div className="navItem txt">
                </div>
                <div className="navItem">
                    <Link to='/dashboard' className="dBlock"><img src={logo2} className="logo" alt="NOH" /></Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;