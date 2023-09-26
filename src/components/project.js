import React from "react";
import "../styles/project.css";

export default function Project({title="project"}) {

    
    return(
        <div className="project">
            <div className="project-title">
                {title}
            </div>
            <div className="project-description">
                description
            </div>
        </div>
        
    )
}