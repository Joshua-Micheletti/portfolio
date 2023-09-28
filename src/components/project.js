import React from "react";
import "../styles/project.css";

import { useState } from "react";
import { HSLToRGB } from "../tools/colors";

export default function Project({title="project", description="description", tags="", link, image, hue=150}) {
    const [isOpen, setIsOpen] = useState(false);
    
    function handleClick() {
        setIsOpen(!isOpen);
    }

    function redirect() {
        window.open(link);
    }

    var sat = 100;
    var lumLight = 40;
    var lumDark = 10;

    var lightColor = HSLToRGB(hue, sat, lumLight);
    var darkColor = HSLToRGB(hue, sat, lumDark);

    return(
        <div className="project">
            <div className={"project-content" + (isOpen ? " appear-down" : " appear-down-back")} >
                <div className={"image-background" + (isOpen ? " appear" : " disappear")}
                     style={{"--r-d": darkColor[0],
                             "--g-d": darkColor[1],
                             "--b-d": darkColor[2],
                             "--r-l": lightColor[0],
                             "--g-l": lightColor[1],
                             "--b-l": lightColor[2],
                             "--image": "url(" + image + ")"}}>
                </div>
                
                <div className={"project-name" + (isOpen ? " blurry-background-p" : " blurry-background-off-p")} onClick={handleClick}>
                    {title}
                </div>
                
                <div className= "project-description">
                    <div className="project-description-text">
                        {description}
                    </div>
                </div>

                <div className={"tags" + (isOpen ? " appear" : " disappear")}>
                    {tags}
                </div>

                <div className={"link" + (isOpen ? " appear" : " disappear")} onClick={redirect}>
                </div>
            </div> 
                     
        </div>
        
    )
}