import React from "react";
import { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';

import "../styles/dropdown.css";

export default function Dropdown({ dark=false, items="", text="dropdown", alignment="center" }) {
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
        console.log("hidden!");
    }

    var menuItems = [];
    var elements = items.split(',');

    for (var i = 0; i < elements.length; i++) {
        menuItems.push(
            <li className={'menu-item ' + "item-" + i.toString() + " " + (dark ? "dark-menu-item" : "light-menu-item")} key={elements[i]}>
                <div className={'dropdown-button ' + (dark ? "dark-button" : "light-button")}>
                    {elements[i]}
                </div>
            </li>
        );
    }

    return(
        <div ref={ref}>
            <div className={"dropdown-button " + (dark ? "dark-button" : "light-button")} onClick={handleClick}>
                {text}
            </div>

            {isOpen ?
                <div className={"menu menu-" + alignment + " " + (dark ? "dark-menu" : "")}>
                    {menuItems}
                </div>
                :
                <div className={"menu-closed menu-" + alignment + " " + (isHidden ? "menu-hidden " : "") + (dark ? "dark-menu" : "light-menu")}>
                    {menuItems}
                </div>
            }
        </div>
    );
}