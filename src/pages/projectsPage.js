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
                            <Project title="Gallium" />
                            <Project title="GUIApp" />
                        </td>
                        <td>
                            <Project title="Pyllium3D" />
                            <Project title="Pyllium2D" />
                            <Project title="Raytracing" />
                        </td>
                    </tr>
                </table>
            </div>
            <div className="content">

            </div>
        </div>
    )
}