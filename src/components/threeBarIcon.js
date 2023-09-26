import React from "react";
import "../styles/threeBarIcon.css";

import { useEffect, useState } from "react";

export default function ThreeBarIcon({state}) {
    const [isOpen, setIsOpen] = useState(state);

    useEffect(() => {
        setIsOpen(state);
    }, [state])

    return(
        <div className={"three-bar-icon" + (isOpen ? " icon-open" : " icon-closed")}>
            <div className={"bar top-bar animation-props" + (isOpen ? " top-bar-open" : " top-bar-closed")}>
            </div>
            <div className={"bar middle-bar animation-props" + (isOpen ? " middle-bar-open" : " middle-bar-closed")}>
            </div>
            <div className={"bar bottom-bar animation-props" + (isOpen ? " bottom-bar-open" : " bottom-bar-closed")}>
            </div>
        </div>
    );
}