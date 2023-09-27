import React from "react";
import "../styles/project.css";

import { useState } from "react";
import { HSLToRGB } from "../tools/colors";

export default function Project({title="project", description="description", hue=150}) {
    const [isOpen, setIsOpen] = useState(false);
    // const [hue, setHue] = useState(hue);
    
    // setHue(Math.random() * 360);
    
    function handleClick() {
        setIsOpen(!isOpen);
    }

    // const hue = Math.random() * 360;
    var sat = 100;
    var lumLight = 50;
    var lumDark = 10;

    var lightColor = HSLToRGB(hue, sat, lumLight);
    var darkColor = HSLToRGB(hue, sat, lumDark);

    return(
        <div className="project">
            <div className={"project-title" + (isOpen ? " image-background appear-down" : " appear-down-back")} onClick={handleClick}
                 style={{"--r-d": darkColor[0], "--g-d": darkColor[1], "--b-d": darkColor[2], "--r-l": lightColor[0], "--g-l": lightColor[1], "--b-l": lightColor[2]}}>
                <div className={"project-name" + (isOpen ? " blurry-background" : " blurry-background-off")}>
                    {title}
                </div>
                
                <div className={"project-description" + (isOpen ? " appear-down" : " appear-down-back")} >
                    <div className="project-description-text">
                        {description}
                    </div>
                </div>  
            </div> 
                     
        </div>
        
    )
}