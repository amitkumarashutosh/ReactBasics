import React from "react";
import Logo from '../images/bnblogo.png'

export default function Navbar(){
    return (
        <>
           <nav>
            <img src={Logo} className="logo"/>
           </nav>
        </>
    )
}