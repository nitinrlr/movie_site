import "./Navigation.css";
import {NavLink} from "react-router-dom";

const Navigation = (props) => {
    let navClass = "main-nav";

    if (props.open) {
        navClass = "main-nav open";
    }

    return (
        <nav className={navClass}>
            <ul>
                <li><NavLink to="/" onClick={props.onLinkClick}>Home</NavLink></li>
                <li><NavLink to="/browse" onClick={props.onLinkClick}>Browse</NavLink></li>
                <li><NavLink to="/about" onClick={props.onLinkClick}>About Us</NavLink></li>
                <li><NavLink to="/login" onClick={props.onLinkClick}>Login</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;
