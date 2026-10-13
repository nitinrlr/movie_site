import "./Header.css"
import logo from "./images/favicon512.png"

const Header = () => {
    return (
        <header className="main-header">
            <img id="logo" src={logo} alt="Logo" />
            <h1>My App</h1>
        </header>
    );
}

export default Header;