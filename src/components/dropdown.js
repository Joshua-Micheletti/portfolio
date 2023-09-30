// generic component to implement a dropdown element

// react import
import React from "react";
// import react hooks
import { useState } from 'react';

// import Link to move between routes
import { Link } from 'react-router-dom';

// import custom hooks
import { useDetectClickOutside } from 'react-detect-click-outside';

// import the style for the component
import "../styles/dropdown.css";

// import additional components (icon in this case)
import ThreeBarIcon from "../components/threeBarIcon";

// main component definition
// it takes props for dark mode (dark), a list of items to display as children (items), a list of links to give to the children (links)
// a the name to display (text), where to align the dropdown menu (alignment), an icon name to choose a certain icon (icon)
// and the children of the component (children)
export default function Dropdown({ dark=false, items="", links, text="dropdown", alignment="center", icon, children }) {
    // state variable to keep track if the dropdown menu is open
    const [isOpen, setOpen] = useState(false);
    // state variable to keep track if the dropdown menu should be hidden (not rendered)
    const [isHidden, setHidden] = useState(true);

    // reference constant to check a click outside of the referenced element
    const ref = useDetectClickOutside({ onTriggered: handleClickOutside });

    // function to handle the click of the dropdown component
    function handleClick() {
        // alternate the isOpen state
        setOpen(!isOpen);

        // if the dropdown is open
        if (isOpen) {
            // hide the menu after 0.5s (needs to be the same value as the animation timing)
            setTimeout(hideMenu, 500);
        } else {
            // set the menu to be renderable
            setHidden(false);
        }
    }

    // function to handle a click outside of the dropdown
    function handleClickOutside() {
        // set the dropdown menu to be closed
        setOpen(false);
        // and hide it after 0.5s (needs to be the same value as the animation timing)
        setTimeout(hideMenu, 500);
    }

    // function to hide the menu, mainly used as callback to not use a lambda function
    function hideMenu() {
        setHidden(true);
    }

    // list of links 
    var hrefs = [];
    // if the link prop exists
    if (links !== undefined) {
        // obtain the links from the string (separated by a space)
        var hrefs = links.split(' ');    
    }
    
    // list to contain the menu items
    var menuItems = [];
    // list to contain the split string of items (separated by a comma)
    var elements = items.split(',');

    // for every element in the list
    for (var i = 0; i < elements.length; i++) {
        // calculate the animation delay based on the current element
        var animationDelayValue = parseFloat(i) / parseFloat(15);
        animationDelayValue += 0.3;

        // add a new element to the list of menu items
        menuItems.push(
            // list with a specific classname and key, to keep track of each element
            <li className={'menu-item item-' + i.toString() + " " + (dark ? "dark-menu-item" : "light-menu-item")}
                key={elements[i]}
                style={{animationDelay: animationDelayValue.toString() + "s"}}>
                <div className={'hover-glow ' + (dark ? "dark-button" : "light-button")}>
                    {(elements[i] === "More...") ? <Link to="/portfolio/projects/">{elements[i]}</Link> : // check for the special case of the More... element
                    <a href={hrefs[i] !== undefined ? hrefs[i] : "#"} className="hover-glow">{elements[i]}</a>}
                </div>
            </li>
        );
    }

    // add the children to the list of items
    menuItems.push(children);

    // elements to render
    return(
        // wrapper div with reference for the click outside hook
        <div ref={ref} style={{minHeight: "100%"}}>
            {/* button for the dropdown component */}
            <div className={"dropdown-button hover-glow " + (dark ? "dark-button" : "light-button")} onClick={handleClick}>
                {/* choose between the icon or the dropdown text */}
                {icon == "three-bar-icon" ? <ThreeBarIcon state={isOpen}/> : null}
                {icon === undefined ? text : null}
            </div>
            
            {/* if the menu is open, render it as visible */}
            {isOpen ?
                <div className={"menu menu-" + alignment + " " + (dark ? "dark-menu" : "")}>
                    {menuItems}
                </div>
                :
                // otherwise, if the menu isn't open, render it as invisible and change the state to hidden
                <div className={"menu-closed menu-" + alignment + " " + (isHidden ? "menu-hidden " : "") + (dark ? "dark-menu" : "light-menu")}
                     onAnimationEnd={() => {setHidden(true)}}>
                    {menuItems}
                </div>
            }
        </div>
    );
}