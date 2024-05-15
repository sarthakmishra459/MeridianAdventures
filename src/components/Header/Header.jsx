import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="sticky shadow-lg">
      <nav className="flex flex-row justify-between">
        <Link to="/">
          <img
            src="../../public/letter-m.png"
            alt="Logo"
            className=" size-10"
          />
        </Link>
        <div className="flex flex-row py-1">
        <div><NavLink to="/" className={({isActive})=>` ${isActive ? "bg-purple-700 text-white" : "text-black"} m-0 p-2 hover:bg-purple-700 hover:text-white`}>Home</NavLink></div>
        <div><NavLink to="/about" className={({isActive})=>` ${isActive ? "bg-purple-700 text-white" : "text-black"} m-0 p-2 hover:bg-purple-700 hover:text-white`}>About</NavLink></div>
        <div><NavLink to="/contact" className={({isActive})=>` ${isActive ? "bg-purple-700 text-white" : "text-black"} m-0 p-2 hover:bg-purple-700 hover:text-white`}>Contact</NavLink></div>
        <div><Link to="/login" className="m-0 p-2 hover:bg-purple-700 hover:text-white">Login</Link></div>
        <div><Link to="signin" className="m-0 p-2 hover:bg-purple-700 hover:text-white">Signin</Link></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
