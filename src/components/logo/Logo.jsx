import "./Logo.css";
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="logo">
            MOVIE<span>BUZZ</span>
        </Link>
    );
};

export default Logo;
