import React from "react";

import { useNavigate } from "react-router-dom";

import "../styles/transparentLinkButton.css";

export default function TransparentLinkButton() {
    const navigate = useNavigate();

    function handleClick() {
        // history.push('/portfolio/projects');
        navigate("/portfolio/projects");
    }

    return(
        <div className="transparent-button" onClick={handleClick}>
            {/* <Link to="" className="link-area">
                Check out my projects!
            </Link> */}
            <div className="text-area">
                Check out my projects!
            </div>
        </div>
    )
}