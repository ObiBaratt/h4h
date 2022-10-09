import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className='org'>Date Old People</div>
        <div className='navItems'>
            <NavLink
                to="/" end
                className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                Home
            </NavLink>
            <NavLink
                to="/input"
                className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                UserInput
            </NavLink>
            <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                Register
            </NavLink>
            <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                Login
            </NavLink>
            </div>
      </nav>
    );
  };

export default Navbar;
