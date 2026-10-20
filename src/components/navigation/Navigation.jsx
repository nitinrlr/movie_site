import "./Navigation.css";
import {NavLink} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">Browse</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;
