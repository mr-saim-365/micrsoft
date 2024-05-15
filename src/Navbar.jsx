import React from "react";
import logo from "./imgs/logo.png"
import search from "./icons/search.png";
import shopping from "./icons/shopping-cart.png";
import user from "./icons/user-plus.png";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const openNav = () => {
        
        document.getElementById("mySideNav").style.width = "100%";
    }

    const closeNav = () => {
        document.getElementById("mySideNav").style.width = "0px";

    }


    return (
        <>
            <div className="navbar">
            
             <div className="sidebar">
                <span className="menulines" onClick={openNav}>&#9776;</span>
             </div>
                <NavLink to="/">
                    <img src= {logo} alt="logo"></img>
                </NavLink>
                
                <ul>
                    
                    <li>
                        <NavLink className= "item" to="/Microsoft365">Microsoft 365</NavLink>
                    </li>

                    <li>
                        <NavLink className="item" to="/Office">Office</NavLink>
                    </li>

                    <li>
                        <NavLink className="item" to="/Copilot">Copilot</NavLink>
                    </li>

                    <li>
                        <NavLink className="item" to="/Windows">Windows</NavLink>
                    </li>

                    <li>
                        <NavLink className="item" to="/Support">Support</NavLink>
                    </li>
                </ul>

                <div className="sideNav" id="mySideNav">
                   <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a><hr/>
                    <a href="Home">Microsoft 365</a><hr/>
                    <a href="Office">Office</a><hr/>
                    <a href="Copilot">Copilot</a><hr/>
                    <a href="Windows">Windows</a><hr/>
                    <a href="Support">Support</a><hr/>
                </div>

                <div className="icons">
                <p className="icon-para">All Microsoft</p>
                <img src={search} alt="search-icon"></img>
                <img src={shopping} alt="shopping-cart-icon"></img>
                <img src={user} alt="user-plus-icon"></img>
                </div>
            </div>
        </>
    )

}

export default Navbar;