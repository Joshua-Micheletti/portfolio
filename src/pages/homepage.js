import React from "react";
import "../styles/homepage.css"

import { useEffect, useRef, useState } from "react";
import { useIsVisible } from "../hooks/useIsVisible"

import Navbar from "../layouts/navbar"
import LanguagesTable from "../components/languagesTable"
import TransparentLinkButton from "../components/transparentLinkButton";

export default function Homepage(props) {
    const [seen, setSeen] = useState(false);
    const [ready, setReady] = useState(false);
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    setTimeout(() => {setReady(true)}, 500);

    useEffect(() => {
        if (isVisible && ready) {
            setSeen(true);
        }
    }, [isVisible]);

    return(
        <div className="homepage">
            <Navbar />

            <div className="name">
                Joshua Micheletti
            </div>
            <div className="titles">
                Programmer, Software Developer
            </div>
            <div className={"description " + (seen || isVisible ? "fade-up" : "")} ref={ref}>
                Hi! My name's Joshua Micheletti, I'm a programmer and software developer with knowledge of many popular and modern programming languages, environments and APIs.
                I'm mostly interested in graphics programming, graphical applications and videogame development. But I'm competent in the development of Webpages, Databases and AI.
            </div>

            <div className="compentence-title">
                Fields of Competence
            </div>

            <LanguagesTable />

            <TransparentLinkButton />

            <p> </p><br></br>
            <p> </p><br></br>
        </div>
    );
}