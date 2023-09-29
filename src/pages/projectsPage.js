import React from "react";
import Navbar from "../layouts/navbar";
import "../styles/projectsPage.css";
import { useEffect, useState } from "react";

import Project from "../components/project";
var seedrandom = require('seedrandom');

// import "../tools/seedrandom";


// import useWindowDimensions from "../hooks/useWindowDimensions";

export default function ProjectsPage({ seed }) {

    seedrandom(seed, { global: true });
    // const {width, height} = useWindowDimensions();

    // Math.seedrandom("henlo");

    const [width, setWidth] = useState(window.innerWidth);

    // const [hues, setHues] = useState([]);

    const updateWindowDimensions = () => {
        const newWidth = window.innerWidth;
        setWidth(newWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions) 
    }, []);

    console.log(width);

    // var tmpHues = [];

    // for (var i = 0; i < projectCount; i++) {
    //     tmpHues.push(Math.random() * 360);        
    // }

    // setHues(tmpHues);



    // useEffect(() => {
    //     console.log("new width: " + window.innerWidth.toString());
    // }, [window.innerWidth]);


    return(
        <div className="projects-page">
            <Navbar />            
            <div className="projects-table">
                <div className="projects-header">
                    Projects
                </div>
                <table>
                    <thead className="table-head">
                        <tr className="table-row">
                            <th className="table-header">
                                <div className="language cpp">
                                    C++
                                </div>
                            </th>
                            <th className="table-header">
                                <div className="language python">
                                    Python
                                </div>
                            </th>
                            <th className="table-header">
                                <div className="language java">
                                    Java
                                </div>
                            </th>
                            <th className="table-header">
                                <div className="language javascript">
                                    Javascript
                                </div>
                            </th>
                            <th className="table-header">
                                <div className="language sql">
                                    SQL
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        <tr className="table-row">
                            <td className="table-cell">
                                <Project title="Gallium"
                                        description="3D Engine supporting both raster and raytracing rendering"
                                        tags={(width <= 1280 ? "C++, " : "") + "OpenGL, GLFW, ImGui"}
                                        link="https://github.com/Joshua-Micheletti/Gallium"
                                        image="https://raw.githubusercontent.com/Joshua-Micheletti/Gallium/main/img/pathtraced.png"
                                        hue={Math.random() * 360} />

                                <Project title="GUIApp"
                                        description="Graphical User Interface application template, crossplatform"
                                        tags={(width <= 1280 ? "C++, " : "") + "GLFW, ImGui"}
                                        link="https://github.com/Joshua-Micheletti/GUIApp"
                                        image="https://raw.githubusercontent.com/Joshua-Micheletti/GUIApp/main/img/main.png"
                                        hue={Math.random() * 360}/>
                            </td>
                            <td className="table-cell">
                                <Project title="Pyllium3D"
                                        description="3D raster engine, designed to be optimized for lower hardware"
                                        tags={(width <= 1280 ? "Python, " : "") + "OpenGL, GLFW, ImGui"}
                                        link="https://github.com/Joshua-Micheletti/Pyllium3D"
                                        image="https://raw.githubusercontent.com/Joshua-Micheletti/Pyllium3D/main/img/screenshot.png"
                                        hue={Math.random() * 360}/>

                                <Project title="Pyllium2D"
                                        description="2D raster engine, alternative to Pyglet, written in API style"
                                        tags={(width <= 1280 ? "Python, " : "") + "OpenGL, GLFW"}
                                        link="https://github.com/Joshua-Micheletti/Pyllium2D"
                                        image="https://raw.githubusercontent.com/Joshua-Micheletti/Pyllium2D/main/img/main.png"
                                        hue={Math.random() * 360}/>

                                <Project title="Raytracer"
                                        description="3D raytracing and pathtracing engine, supports most primitives"
                                        tags={(width <= 1280 ? "Python, " : "") + "OpenGL, GLFW"}
                                        link="https://github.com/Joshua-Micheletti/Raytracer"
                                        image="https://raw.githubusercontent.com/Joshua-Micheletti/RayTracer/main/img/reflection.png"
                                        hue={Math.random() * 360}/>

                                <Project title="FitnessDiary"
                                          description="A GUI app to keep track of fitness activities"
                                          tags={(width <= 1280 ? "Python, " : "") + "TkInter"}
                                          link="https://github.com/Joshua-Micheletti/FitnessDiary"
                                          image="https://raw.githubusercontent.com/Joshua-Micheletti/FitnessDiary/main/img/progress.png"
                                          hue={Math.random() * 360} />
                                
                                <Project title="PythonGUIApp"
                                         description="Graphical User Interface application template, crossplatform"
                                         tags={(width <= 1280 ? "Python, " : "") + "TkInter"}
                                         link="https://github.com/Joshua-Micheletti/PythonGUIApp"
                                         image="https://raw.githubusercontent.com/Joshua-Micheletti/PythonGUIApp/main/img/azure-dark.png"
                                         hue={Math.random() * 360} />

                                <Project title="Pyphics"
                                         description="OpenGL application template, starting point of most python engines"
                                         tags={(width <= 1280 ? "Python, " : "") + "OpenGL, GLFW"}
                                         link="https://github.com/Joshua-Micheletti/Pyphics"
                                         image=""
                                         hue={Math.random() * 360} />

                                <Project title="PysicsWorld"
                                         description="2D physics engine with box to box collision and resolution"
                                         tags={(width <= 1280 ? "Python, " : "") + "Pyglet"}
                                         link="https://github.com/Joshua-Micheletti/PysicsWorld"
                                         image=""
                                         hue={Math.random() * 360} />

                                <Project title="SkyboxUnwrapper"
                                         description="A tool to unwrap spherical skyboxes into flat ones"
                                         tags={(width <= 1280 ? "Python" : "") + ""}
                                         link="https://github.com/Joshua-Micheletti/SkyboxUnwrapper"
                                         image="https://raw.githubusercontent.com/Joshua-Micheletti/SkyboxUnwrapper/master/img/front.png"
                                         hue={Math.random() * 360} />

                                <Project title="KernelConvolution"
                                         description="Single and Multithreaded application to apply kernel filters to images"
                                         tags={(width <= 1280 ? "Python" : "") + ""}
                                         link="https://github.com/Joshua-Micheletti/KernelConvolution"
                                         image="https://raw.githubusercontent.com/Joshua-Micheletti/KernelConvolution/master/img/processed.png"
                                         hue={Math.random() * 360} />
                            </td>
                            <td className="table-cell">
                                <Project title="GallyRun"
                                        description="Videogame about Gally's adventures! Has enemies, a boss and multiple endings"
                                        tags={(width <= 1280 ? "Java, " : "") + "LWJGL, OpenAL"}
                                        link="https://github.com/Joshua-Micheletti/GallyRun"
                                        image="https://raw.githubusercontent.com/Joshua-Micheletti/GallyRun/main/img/beginning.png"
                                        hue={Math.random() * 360}/>

                                <Project title="CheckIn"
                                         description="Fiverr commission, tool to develop checkin cards for employees"
                                         tags={(width <= 1280 ? "Java, " : "") + "Processing"}
                                         link="https://github.com/Joshua-Micheletti/CheckIn/tree/main"
                                         image="https://raw.githubusercontent.com/Joshua-Micheletti/CheckIn/main/img/screenshot.png?token=GHSAT0AAAAAACHGDOEPDTQNCP62JMUCZOPQZIXAAOA"
                                         hue={Math.random() * 360} />
                            </td>
                            <td className="table-cell">
                                <Project title="Portfolio"
                                        description="The website you're seeing right now"
                                        tags={(width <= 1280 ? "Javascript, " : "") + "React, CSS, HTML"}
                                        link="https://github.com/Joshua-Micheletti/portfolio"
                                        image="https://github.com/Joshua-Micheletti/portfolio/blob/main/img/screenshot.png?raw=true"
                                        hue={Math.random() * 360} />

                                <Project title="InvisionTech-clone"
                                        description="Copy of a website for training, not up to date"
                                        tags={(width <= 1280 ? "Javascript, " : "") + "React, CSS, HTML"}
                                        link="https://github.com/Joshua-Micheletti/portfolio"
                                        image=""
                                        hue={Math.random() * 360} />

                                <Project title="PlanetZooGenesCalculator"
                                        description="Web app to calculate genes in the game Planet Zoo"
                                        tags={(width <= 1280 ? "Javascript, " : "") + "JQuery, Bootstrap"}
                                        link="https://github.com/Joshua-Micheletti/PlanetZooGenesCalculator"
                                        image="https://raw.githubusercontent.com/Joshua-Micheletti/PlanetZooGenesCalculator/master/img/main.png"
                                        hue={Math.random() * 360} />

                                <Project title="TeraDamageOptimizer"
                                        description="Web app to calculate damage and builds in the game Tera"
                                        tags={(width <= 1280 ? "Javascript, " : "") + "JQuery, Bootstrap"}
                                        link="https://github.com/Joshua-Micheletti/Tera_Damage_Optimizer"
                                        image="https://raw.githubusercontent.com/Joshua-Micheletti/Tera_Damage_Optimizer/master/img/builds.png"
                                        hue={Math.random() * 360} />

                                <Project title="BezierCurveVisualizer"
                                        description="Web app to visualize Bezier Curves and their generation"
                                        tags={(width <= 1280 ? "Javascript, " : "") + "P5.js"}
                                        link="https://github.com/Joshua-Micheletti/BezierCurveVisualizer"
                                        image="https://raw.githubusercontent.com/Joshua-Micheletti/BezierCurveVisualizer/main/img/cubic.png"
                                        hue={Math.random() * 360} />
                            </td>
                            <td className="table-cell">
                                <Project title="Biblioteca"
                                        description="Database to keep track of books in libraries (with GUI)"
                                        tags={(width <= 1280 ? "SQL, " : "") + "MySQL, TkInter"}
                                        link="https://github.com/Joshua-Micheletti/biblioteca"
                                        image=""
                                        hue={Math.random() * 360} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="other-projects">
                <div className="other-projects-title">
                    Other Projects
                </div>
                <div className="other-projects-list">
                    <div className="project-container">
                        <Project title="MIPS_GameOfLife"
                                description="Game of Life algorithm in MIPS assembly, run on WinMIPS64"
                                link="https://github.com/Joshua-Micheletti/MIPS_GameOfLife"
                                tags="MIPS"
                                image="https://raw.githubusercontent.com/Joshua-Micheletti/MIPS_GameOfLife/main/img/glider.png"
                                hue={Math.random() * 360} />
                    </div>
                    <div className="project-container">
                        <Project title="Dotfiles"
                                description="Linux dotfiles to setup a linux environment"
                                link="https://github.com/Joshua-Micheletti/dotfiles"
                                tags="Bash"
                                image="https://raw.githubusercontent.com/Joshua-Micheletti/dotfiles/main/img/example.png"
                                hue={Math.random() * 360} />
                    </div>
                    <div className="project-container">
                        <Project title="TermuxSetupScript"
                                description="Bash script to install and setup an Ubuntu environment in Termux for mobile"
                                link="https://github.com/Joshua-Micheletti/TermuxSetupScript"
                                tags="Bash"
                                image=""
                                hue={Math.random() * 360} />
                    </div>
                </div>
            </div>
            <div className="content">

            </div>
        </div>
    )
}