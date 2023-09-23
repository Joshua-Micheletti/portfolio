import React from "react";

import { Link } from "react-router-dom";

import "../styles/navbar.css";

import Dropdown from "../components/dropdown"

export default function Navbar(props) {

    return(
        <div className="navbar">
            <div className="home-button-area">
                <div className="home-button">
                    <a href="#">Joshua Micheletti</a>
                </div>
            </div>

            <div className="navbar-buttons-area">
                <div className="right-button">
                    <Dropdown
                        text="Projects"
                        items="Gallium, Raytracer, Pyllium2D, Pyllium3D, More..."
                        alignment="center" />
                </div>
                <div className="right-button">
                    <Dropdown
                        text="Socials"
                        items="Github, Twitter, LinkedIn"
                        alignment="center" />
                </div>
                <div className="right-button">
                    <Dropdown
                        text="Contacts"
                        items="Email: joshua.e.n.micheletti@gmail.com, Phone: +39 3290045654"
                        alignment="left" />
                </div>
            </div>
        </div>
    );
}