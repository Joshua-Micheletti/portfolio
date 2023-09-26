import React from "react";
import Dropdown from "../components/dropdown";

import { useEffect, useState } from "react";

import "../styles/navbar.css";

import ThreeBarIcon from "../components/threeBarIcon";

export default function NavbarButtons() {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());


    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }

        window.addEventListener('resize', updateDimension);
        
        return(() => {
            window.removeEventListener('resize', updateDimension);
        });
    }, [screenSize])

    return(
        <div className="navbar-buttons-area">
            {screenSize.width > 768 ?
                <div>
                    <div className="right-button">
                        <Dropdown
                            text="Projects"
                            items="Gallium,Raytracer,Pyllium2D,Pyllium3D,More..."
                            alignment="center"
                            links="https://github.com/Joshua-Micheletti/Gallium https://github.com/Joshua-Micheletti/Raytracer https://github.com/Joshua-Micheletti/Pyllium2D https://github.com/Joshua-Micheletti/Pyllium3D" />
                    </div>
                    <div className="right-button">
                        <Dropdown
                            text="Socials"
                            items="Github, Twitter, LinkedIn"
                            alignment="center"
                            links="https://github.com/Joshua-Micheletti/ https://twitter.com/JoshuaMichelet https://www.linkedin.com/in/joshua-micheletti-229131201/" />
                    </div>
                    <div className="right-button">
                        <Dropdown
                            text="Contacts"
                            items="Email: joshua.e.n.micheletti@gmail.com, Phone: +39 3290045654"
                            alignment="right" />
                    </div>
                </div>

                :

                <div className="right-aligned">
                    <div className="right-button-icon">
                        <Dropdown alignment="right" icon="three-bar-icon">
                            <Dropdown
                                text="Projects"
                                items="Gallium,Raytracer,Pyllium2D,Pyllium3D,More..."
                                alignment="left"
                                links="https://github.com/Joshua-Micheletti/Gallium https://github.com/Joshua-Micheletti/Raytracer https://github.com/Joshua-Micheletti/Pyllium2D https://github.com/Joshua-Micheletti/Pyllium3D" />
                            <Dropdown
                                text="Socials"
                                items="Github,Twitter,LinkedIn"
                                alignment="left"
                                links="https://github.com/Joshua-Micheletti/ https://twitter.com/JoshuaMichelet https://www.linkedin.com/in/joshua-micheletti-229131201/" />
                            <Dropdown text="Contacts" items="Email: joshua.e.n.micheletti@gmail.com,Phone: +39 3290045654" alignment="left" />
                        </Dropdown>
                    </div>
                </div>    
            }
        </div> 
    );
}

function getCurrentDimension() {
    return {
      	width: window.innerWidth,
      	height: window.innerHeight
    }
}