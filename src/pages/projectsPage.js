import React from "react";
import Navbar from "../layouts/navbar";
import "../styles/projectsPage.css";

import Project from "../components/project";

export default function ProjectsPage() {


    return(
        <div className="projects-page">
            <Navbar />
            {/* <div style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                Work in progress
            </div> */}
            
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
                                        tags="OpenGL, GLFW, ImGui"
                                        link="https://github.com/Joshua-Micheletti/Gallium"
                                        image="https://raw.githubusercontent.com/Joshua-Micheletti/Gallium/main/img/pathtraced.png"
                                        hue={Math.random() * 360} />

                                <Project title="GUIApp"
                                        description="Graphical User Interface application template, crossplatform"
                                        tags="GLFW, ImGui"
                                        link="https://github.com/Joshua-Micheletti/GUIApp"
                                        image="https://raw.githubusercontent.com/Joshua-Micheletti/GUIApp/main/img/main.png"
                                        hue={Math.random() * 360}/>
                            </td>
                            <td className="table-cell">
                                <Project title="Pyllium3D"
                                        description="3D raster engine, designed to be optimized for lower hardware"
                                        tags="OpenGL, GLFW, ImGui"
                                        link="https://github.com/Joshua-Micheletti/Pyllium3D"
                                        image=""
                                        hue={Math.random() * 360}/>

                                <Project title="Pyllium2D"
                                        description="2D raster engine, alternative to Pyglet, written in API style"
                                        tags="OpenGL, GLFW"
                                        link="https://github.com/Joshua-Micheletti/Pyllium2D"
                                        image="https://raw.githubusercontent.com/Joshua-Micheletti/Pyllium2D/main/img/main.png"
                                        hue={Math.random() * 360}/>

                                <Project title="Raytracer"
                                        description="3D raytracing and pathtracing engine, supports most primitives"
                                        tags="OpenGL, GLFW"
                                        link="https://github.com/Joshua-Micheletti/Raytracer"
                                        image="https://raw.githubusercontent.com/Joshua-Micheletti/RayTracer/main/img/reflection.png"
                                        hue={Math.random() * 360}/>
                            </td>
                            <td className="table-cell">
                                <Project title="GallyRun"
                                        description="Videogame about Gally's adventures! Has enemies, a boss and multiple endings"
                                        tags="LWJGL, OpenAL"
                                        link="https://github.com/Joshua-Micheletti/GallyRun"
                                        image="https://raw.githubusercontent.com/Joshua-Micheletti/GallyRun/main/img/beginning.png"
                                        hue={Math.random() * 360}/>
                            </td>
                            <td className="table-cell">
                                <Project title="Portfolio"
                                        description="The website you're seeing right now"
                                        tags="React, CSS, HTML"
                                        link="https://github.com/Joshua-Micheletti/portfolio"
                                        image=""
                                        hue={Math.random() * 360} />

                                <Project title="InvisionTech-clone"
                                        description="Copy of a website for training, not up to date"
                                        tags="React, CSS, HTML"
                                        link="https://github.com/Joshua-Micheletti/portfolio"
                                        image=""
                                        hue={Math.random() * 360} />

                                <Project title="PlanetZooGenesCalculator"
                                        description="Web app to calculate genes in the game Planet Zoo"
                                        tags="JQuery, Bootstrap"
                                        link="https://github.com/Joshua-Micheletti/PlanetZooGenesCalculator"
                                        image="https://raw.githubusercontent.com/Joshua-Micheletti/PlanetZooGenesCalculator/master/img/main.png"
                                        hue={Math.random() * 360} />

                                <Project title="TeraDamageOptimizer"
                                        description="Web app to calculate damage and builds in the game Tera"
                                        tags="JQuery, Bootstrap"
                                        link="https://github.com/Joshua-Micheletti/Tera_Damage_Optimizer"
                                        image="https://raw.githubusercontent.com/Joshua-Micheletti/Tera_Damage_Optimizer/master/img/builds.png"
                                        hue={Math.random() * 360} />

                                <Project title="BezierCurveVisualizer"
                                        description="Web app to visualize Bezier Curves and their generation"
                                        tags="P5.js"
                                        link="https://github.com/Joshua-Micheletti/BezierCurveVisualizer"
                                        image="https://raw.githubusercontent.com/Joshua-Micheletti/BezierCurveVisualizer/main/img/cubic.png"
                                        hue={Math.random() * 360} />
                            </td>
                            <td className="table-cell">
                                <Project title="Biblioteca"
                                        description="Database to keep track of books in libraries (with GUI)"
                                        tags="MySQL, TkInter"
                                        link="https://github.com/Joshua-Micheletti/biblioteca"
                                        image=""
                                        hue={Math.random() * 360} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="content">

            </div>
        </div>
    )
}