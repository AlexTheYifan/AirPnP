import React, {PropTypes} from 'react';
import { Link , IndexLink} from 'react-router';
import "../../styles/Header.css";
import {aircrafts} from "../api/mockAircraft"


const Header = ({loading}) => {
    return(
        <div className="topnav">
            <span id="logo"><IndexLink to="homePage" id="logoText">AirPnP</IndexLink></span>
            <span><Link to="compare" id="compare">compare</Link></span>
            <span><Link to="wishlist" id="wishlist">wishlist</Link></span>
            <span><Link to="chat">contact</Link></span>
            <span><Link to="signIn">login</Link></span>
        </div>
    );
};

export default Header;