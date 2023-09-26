import React from "react";
import { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { Link } from 'react-router-dom';

import "../styles/dropdown.css";

import ThreeBarIcon from "../components/threeBarIcon";

export default function Dropdown({ dark=false, items="", links, text="dropdown", alignment="center", children, icon }) {
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
        console.log(isOpen);
        console.log(isHidden);
    }

    function hideMenu() {
        setHidden(true);
        // console.log("hidden!");
    }

    var menuItems = [];
    var elements = items.split(',');

    var hrefs = [];

    if (links !== undefined) {
        var hrefs = links.split(' ');    
    }
    

    for (var i = 0; i < elements.length; i++) {
        var animationDelayValue = parseFloat(i) / parseFloat(15);
        animationDelayValue += 0.3;

        // console.log(animationDelayValue.toString());
        menuItems.push(
            <li className={'menu-item item-' + i.toString() + " " + (dark ? "dark-menu-item" : "light-menu-item")}
                key={elements[i]}
                style={{animationDelay: animationDelayValue.toString() + "s"}}>
                <div className={'hover-glow ' + (dark ? "dark-button" : "light-button")}>
                    {(elements[i] === "More...") ? <Link to="/portfolio/projects/">{elements[i]}</Link> :
                    <a href={hrefs[i] !== undefined ? hrefs[i] : "#"} className="hover-glow">{elements[i]}</a>}
                </div>
            </li>
        );
    }

    menuItems.push(children);

    return(
        <div ref={ref} style={{minHeight: "100%"}}>
            <div className={"dropdown-button hover-glow " + (dark ? "dark-button" : "light-button")} onClick={handleClick}>
                {icon == "three-bar-icon" ? <ThreeBarIcon state={isOpen}/> : null}
                {icon === undefined ? text : null}
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