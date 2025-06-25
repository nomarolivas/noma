import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            
            <Link  className= "link" to="/">Home</Link>
            <Link  className= "link" to="/Products">Products</Link>


        </div>
        
    )
}

export default Navbar;