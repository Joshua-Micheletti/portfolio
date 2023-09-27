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
                <table>
                    <th>
                        <div className="language cpp">
                            C++
                        </div>
                    </th>
                    <th>
                        <div className="language python">
                            Python
                        </div>
                    </th>
                    <th>
                        <div className="language java">
                            Java
                        </div>
                    </th>
                    <th>
                        <div className="language javascript">
                            Javascript
                        </div>
                    </th>
                    <th>
                        <div className="language sql">
                            SQL
                        </div>
                    </th>
                    <tr>
                        <td>
                            <Project title="Gallium" hue={Math.random() * 360}/>
                            <Project title="GUIApp" hue={Math.random() * 360}/>
                        </td>
                        <td>
                            <Project title="Pyllium3D" hue={Math.random() * 360}/>
                            <Project title="Pyllium2D" hue={Math.random() * 360}/>
                            <Project title="Raytracing" hue={Math.random() * 360}/>
                        </td>
                        <td>
                            <Project title="GallyRun" hue={Math.random() * 360}/>
                        </td>
                        <td>
                            <Project title="portfolio" hue={Math.random() * 360} />
                            <Project title="InvisionTech-clone" hue={Math.random() * 360} />
                            <Project title="PlanetZooGenesCalculator" hue={Math.random() * 360} />
                            <Project title="Tera_Damage_Optimizer" hue={Math.random() * 360} />
                            <Project title="BezierCurveVisualizer" hue={Math.random() * 360} />
                        </td>
                        <td>
                            <Project title="biblioteca" hue={Math.random() * 360} />
                        </td>
                    </tr>
                </table>
            </div>
            <div className="content">

            </div>
        </div>
    )
}