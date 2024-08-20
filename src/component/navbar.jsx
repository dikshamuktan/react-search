import React from "react";
import {Link} from "react-router-dom";

const Navbar= ()=> {

    return(
        <nav className="p-5 bg-black text-4xl text-white">
            <div className="container flex justify-around">
                <Link to="/">Home</Link>
                <Link to="/favourites">Favourites</Link>
            </div>
        </nav>
    )
}

export default Navbar;