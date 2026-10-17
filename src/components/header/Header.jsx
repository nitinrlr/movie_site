import "./Header.css";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import Search from "../search/Search";

const Header = () => {
    return (
        <header className="main-header">
            <Logo />
            <Navigation />
            <Search />
        </header>
    );
};

export default Header;
