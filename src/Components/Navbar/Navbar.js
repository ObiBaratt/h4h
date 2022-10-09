import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className='org'><img src="door-open.svg" width={40} height={40} alt="Door opening logo"/></div>
        <div className='navItems'>
            <NavLink
                to="/" end
                className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                Home
            </NavLink>
            <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                Login
            </NavLink>

            <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                About
            </NavLink>
            <NavLink
                to="/volunteer"
                className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                Volunteer/Host
            </NavLink>
            </div>
      </nav>
    );
  };

export default Navbar;
