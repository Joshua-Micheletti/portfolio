import React from "react";
import "../styles/navbar.css"

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
                    <a href="#">Projects</a>
                </div>
                <div className="right-button">
                    <a href="#">Socials</a>
                </div>
                <div className="right-button">
                    <a href="#">Contacts</a>
                </div>
            </div>

        </div>
    );
}