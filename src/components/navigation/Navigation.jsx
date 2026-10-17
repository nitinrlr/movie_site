import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><a href="#home" className="active">Home</a></li>
                <li><a href="#browse">Browse</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;
