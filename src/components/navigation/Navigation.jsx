import "./Navigation.css";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/browse">Browse</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;
