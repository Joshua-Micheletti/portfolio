import React from "react";
import "../styles/languagesTable.css"

import { useRef, useState, useEffect } from "react";
import { useIsVisible } from "../hooks/useIsVisible";

export default function LanguagesTable() {
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

    var languageDelays = [];
    var frameworkDelays = [];

    var languages = 5;
    var frameworks = [5, 5, 3, 6, 1];

    var gap = 0.4;
    var frameworkGap = 0.1;

    for (var i = 0; i < languages; i++) {
        if (i == 0) {
            languageDelays.push(0);
        } else {
            languageDelays.push(frameworkDelays[frameworkDelays.length - 1] + gap);
        }

        for (var j = 0; j < frameworks[i]; j++) {
            frameworkDelays.push(languageDelays[i] + (frameworkGap * (j + 1)));
        }
    }

    return(
        <div className="competences" ref={ref}>
            <table className={"competence-table" + (isVisible ? " blurry-background" : " blurry-background-off")}>
                <tr className="competence-headers">
                    <th id="programming-header">
                        Languages
                    </th>
                    <th id="framework-header">
                        Frameworks
                    </th>
                </tr>
                <tr>
                    <td className={"programming-language " + (seen || isVisible ? "fade-right" : null)} style={{animationDelay: languageDelays[0] + "s"}}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
                            className="logo">
                        </img>
                        C++
                    </td>
                    <td>
                        <div className="framework-col">
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="cpp-opengl" style={{animationDelay: frameworkDelays[0] + "s"}}>
                                OpenGL
                            </div>
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="cpp-glfw" style={{animationDelay: frameworkDelays[1] + "s"}}>
                                GLFW
                            </div>
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="sfml" style={{animationDelay: frameworkDelays[2] + "s"}}>
                                SFML
                            </div>
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="cpp-imgui" style={{animationDelay: frameworkDelays[3] + "s"}}>
                                ImGui
                            </div>
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="stl" style={{animationDelay: frameworkDelays[4] + "s"}}>
                                STL
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className={"programming-language " + (seen || isVisible ? "fade-right" : null)} style={{animationDelay: languageDelays[1] + "s"}}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                            className="logo">
                        </img>
                        Python
                    </td>
                    <td>
                        <div className="framework-col">
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="python-opengl" style={{animationDelay: frameworkDelays[5] + "s"}}>
                                OpenGL
                            </div>
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="tkinter" style={{animationDelay: frameworkDelays[6] + "s"}}>
                                TkInter
                            </div>
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="pytesseract" style={{animationDelay: frameworkDelays[7] + "s"}}>
                                PyTesseract
                            </div>
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="pygame" style={{animationDelay: frameworkDelays[8] + "s"}}>
                                Pygame
                            </div>
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="pyglet" style={{animationDelay: frameworkDelays[9] + "s"}}>
                                Pyglet
                            </div>
                        </div>
                        
                    </td>
                </tr>
                <tr>
                    <td className={"programming-language " + (seen || isVisible ? "fade-right" : null)} style={{animationDelay: languageDelays[2] + "s"}}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png"
                            className="logo">
                        </img>
                        Java
                    </td>
                    <td>
                        <div className="framework-col">
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="javafx" style={{animationDelay: frameworkDelays[10] + "s"}}>
                                JavaFX
                            </div>
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="lwjgl" style={{animationDelay: frameworkDelays[11] + "s"}}>
                                LWJGL
                            </div>
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="processing" style={{animationDelay: frameworkDelays[12] + "s"}}>
                                Processing
                            </div>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td className={"programming-language " + (seen || isVisible ? "fade-right" : null)} style={{animationDelay: languageDelays[3] + "s"}}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                            className="logo">
                        </img>
                        Javascript
                    </td>
                    <td>
                        <div className="framework-col">
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="nodejs" style={{animationDelay: frameworkDelays[13] + "s"}}>
                                Node.js
                            </div>
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="jquery" style={{animationDelay: frameworkDelays[14] + "s"}}>
                                jQuery
                            </div>
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="react" style={{animationDelay: frameworkDelays[15] + "s"}}>
                                React
                            </div>
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="express" style={{animationDelay: frameworkDelays[16] + "s"}}>
                                Express
                            </div>
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="p5js" style={{animationDelay: frameworkDelays[17] + "s"}}>
                                P5.js
                            </div>
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="ml5js" style={{animationDelay: frameworkDelays[18] + "s"}}>
                                ML5.js
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className={"programming-language " + (seen || isVisible ? "fade-right" : null)} style={{animationDelay: languageDelays[4] + "s"}}>
                        <img
                            src="https://aety.io/wp-content/uploads/2016/11/mysql-logo.png"
                            className="sql-logo">
                        </img>
                        SQL
                    </td>
                    <td>
                        <div className="framework-col">
                            <div className={"framework " + (seen || isVisible ? "fade-left" : null)} id="mysql" style={{animationDelay: frameworkDelays[19] + "s"}}>
                                MySQL
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        
                    </td>
                    <td>

                    </td>
                </tr>
            </table>
        </div>
    );
}