import "./NavToggle.css";

const NavToggle = (props) => {
    // shows an X while menu is open, shows hamburger while closed
    let icon = "☰";

    if (props.open) {
        icon = "✕";
    }

    return (
        <button type="button" className="nav-toggle" aria-label="Toggle menu" onClick={props.onClick}>
            {icon}
        </button>
    );
};

export default NavToggle;
