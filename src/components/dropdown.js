import React from "react";
import { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { Link } from 'react-router-dom';

import "../styles/dropdown.css";

export default function Dropdown({ dark=false, items="", links="", text="dropdown", alignment="center" }) {
    const [isOpen, setOpen] = useState(false);
    const [isHidden, setHidden] = useState(true);
    const ref = useDetectClickOutside({ onTriggered: handleClickOutside });

    function handleClick() {
        setOpen(!isOpen);

        if (isOpen) {
            setTimeout(hideMenu, 500);
        } else {
            setHidden(false);
        }
    }

    function handleClickOutside() {
        setOpen(false);
        setTimeout(hideMenu, 500);
    }

    function hideMenu() {
        setHidden(true);
        // console.log("hidden!");
    }

    var menuItems = [];
    var elements = items.split(',');

    for (var i = 0; i < elements.length; i++) {
        var animationDelayValue = parseFloat(i) / parseFloat(15);
        animationDelayValue += 0.3;
        console.log(elements[i]);

        if (elements[i] === "More...") {
            console.log("found!");
        }
        // console.log(animationDelayValue.toString());
        menuItems.push(
            <li className={'menu-item item-' + i.toString() + " " + (dark ? "dark-menu-item" : "light-menu-item")}
                key={elements[i]}
                style={{animationDelay: animationDelayValue.toString() + "s"}}>
                <div className={'hover-glow ' + (dark ? "dark-button" : "light-button")}>
                    {(elements[i] === "More...") ? <Link to="/portfolio/projects/">{elements[i]}</Link> : elements[i]}
                </div>
            </li>
        );
    }

    return(
        <div ref={ref}>
            <div className={"dropdown-button hover-glow " + (dark ? "dark-button" : "light-button")} onClick={handleClick}>
                {text}
            </div>

            {isOpen ?
                <div className={"menu menu-" + alignment + " " + (dark ? "dark-menu" : "")}>
                    {menuItems}
                </div>
                :
                <div className={"menu-closed menu-" + alignment + " " + (isHidden ? "menu-hidden " : "") + (dark ? "dark-menu" : "light-menu")}
                     onAnimationEnd={() => {setHidden(true)}}>
                    {menuItems}
                </div>
            }
        </div>
    );
}