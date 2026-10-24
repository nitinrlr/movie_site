import "./Pill.css";

const Pill = (props) => {
    let pillClass = "pill";

    if (props.active) {
        pillClass = "pill active";
    }

    return (
        <li>
            <button type="button" className={pillClass}>{props.name}</button>
        </li>
    );
};

export default Pill;
