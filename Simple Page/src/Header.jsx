import React from "react";
import ReactLogo from './assets/react.svg'

export default function Header(){

    return(
        <>
            <div className="container">
                <div className="logo-name">
                    <a href="#"><img src={ReactLogo} alt="" className="logo"/></a>
                    <span>React Project</span>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </>
    )
}