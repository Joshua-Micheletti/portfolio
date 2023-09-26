import React from "react";

import { Link } from "react-router-dom";

import "../styles/navbar.css";

import Dropdown from "../components/dropdown";
import NavbarButtons from "./navbarButtons";

export default function Navbar(props) {

    return(
        <div className="navbar">
            <div className="home-button-area">
                <div className="home-button">
                    <Link to="/portfolio/">Joshua Micheletti</Link>
                </div>
            </div>

            <NavbarButtons />
        </div>
    );
}