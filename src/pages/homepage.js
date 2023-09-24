import React from "react";
import "../styles/homepage.css"

import { useState, useRef } from "react";
import { useIsVisible } from "../hooks/useIsVisible"

import Navbar from "../layouts/navbar"

export default function(props) {
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    return(
        <div className="homepage">
            <Navbar />
            <div className="name">
                Joshua Micheletti
            </div>
            <div className="titles">
                Programmer, Software Developer
            </div>
            <div className={"description " + (isVisible ? "fade-up" : null)} ref={ref}>
                Hi! My name's Joshua Micheletti, I'm a programmer and software developer with knowledge of many popular and modern programming languages, environments and APIs.
                I'm mostly interested in graphics programming, graphical applications and videogame development. But I'm competent in the development of Webpages, Databases and AI.
            </div>

            <div className="compentence-title">
                Fields of Competence
            </div>

            <div className="competences">
                <table className="competence-table">
                    <tr className="competence-headers">
                        <th id="programming-header">
                            Languages
                        </th>
                        <th id="framework-header">
                            Frameworks
                        </th>
                    </tr>
                    <tr>
                        <td className="programming-language">
                            C++
                        </td>
                        <td>
                            <div className="framework-col">
                                <div className="framework" id="c++-opengl">
                                    OpenGL
                                </div>
                                <div className="framework" id="c++-glfw">
                                    GLFW
                                </div>
                                <div className="framework" id="sfml">
                                    SFML
                                </div>
                                <div className="framework" id="c++-imgui">
                                    ImGui
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="programming-language">
                            Python
                        </td>
                        <td>
                            <div className="framework-col">
                                <div className="framework" id="python-opengl">
                                    OpenGL
                                </div>
                                <div className="framework" id="tkinter">
                                    TkInter
                                </div>
                                <div className="framework" id="pytesseract">
                                    PyTesseract
                                </div>
                                <div className="framework" id="pygame">
                                    Pygame
                                </div>
                                <div className="framework" id="pyglet">
                                    Pyglet
                                </div>
                            </div>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className="programming-language">
                            Java
                        </td>
                        <td>
                            <div className="framework-col">
                                <div className="framework" id="javafx">
                                    JavaFX
                                </div>
                                <div className="framework" id="lwjgl">
                                    LWJGL
                                </div>
                            </div>
                        </td>
                    </tr>

                </table>
            </div>
            {/* <div className="fields-of-competence">
                <div className="fields-title">
                    Fields of Competence
                </div>
                <div className="fields">
                    <div className="programming-languages">
                        <div className="programming-title">
                            Programming Languages
                        </div>
                        <div className="C">
                            C
                        </div>
                        <div className="C++">
                            C++
                        </div>
                        <div className="Java">
                            Java
                        </div>
                        <div className="Python">
                            Python
                        </div>
                        <div className="Javascript">
                            Javascript
                        </div>
                        <div className="SQL">
                            SQL
                        </div>
                    </div>
                </div>
                <div className="frameworks">
                    <div className="frameworks-title">
                        Frameworks
                    </div>
                </div>

            </div> */}

            <p> </p><br></br>
            <p> </p><br></br>
            <p> </p><br></br>
            <p> </p><br></br>
            <p> </p><br></br>
            <p> </p><br></br>
            <p> </p><br></br>
            <p> </p><br></br>
            <p> </p><br></br>
        </div>
    );
}