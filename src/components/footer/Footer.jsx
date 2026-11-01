import "./Footer.css";
import {Tooltip} from "react-tooltip";
import Logo from "../logo/Logo";
import instagram from "./images/instagram.svg";
import x from "./images/x.svg";

// social media icons from simpleicons.org
const Footer = () => {
    return (
        <footer className="main-footer">
            <Logo />
            <p>&copy; Copyright Nitin Bhupatiraju</p>
            <div className="socials">
                <a href="https://www.instagram.com" aria-label="Instagram" data-tooltip-id="social-tip" data-tooltip-content="Follow us on Instagram">
                    <img src={instagram} alt="Instagram" />
                </a>
                <a href="https://x.com" aria-label="X" data-tooltip-id="social-tip" data-tooltip-content="Follow us on X">
                    <img src={x} alt="X" />
                </a>
            </div>
            <Tooltip id="social-tip" />
        </footer>
    );
};

export default Footer;
