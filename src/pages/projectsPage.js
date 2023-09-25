import React from "react";
import Navbar from "../layouts/navbar"

export default function ProjectsPage() {
    return(
        <div className="projects-page">
            <Navbar />
            <div style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                Work in progress
            </div>
        </div>
    )
}