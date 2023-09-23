import React from "react";
import "../styles/homepage.css"

import Navbar from "../layouts/navbar"

export default function(props) {

    return(
        <div className="homepage">
            <Navbar />
            <div className="name">
                Joshua Micheletti
            </div>
            <div className="titles">
                Programmer, Software Developer
            </div>
        </div>
    );
}