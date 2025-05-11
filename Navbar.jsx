import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <div>
            <ul>
                <Link to="/"><li>HeroSection</li></Link>
                <Link to="/Footer"><li>Footer</li></Link>
            </ul>
        </div>
    )
}