import "./Header.css";
import {useState} from "react";
import Logo from "../logo/Logo";
import NavToggle from "../nav-toggle/NavToggle";
import Navigation from "../navigation/Navigation";
import Search from "../search/Search";

const Header = () => {
    // menu starts closed on small screens
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="main-header">
            <Logo />
            <NavToggle open={menuOpen} onClick={toggleMenu} />
            <Navigation open={menuOpen} onLinkClick={closeMenu} />
            <Search />
        </header>
    );
};

export default Header;
