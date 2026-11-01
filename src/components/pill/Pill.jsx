import "./Pill.css";

const Pill = (props) => {
    let pillClass = "pill";

    if (props.active) {
        pillClass = "pill active";
    }

    return (
        <li>
            <button
                type="button"
                className={pillClass}
                data-tooltip-id="pill-tip"
                data-tooltip-content={props.tip}
            >
                {props.name}
            </button>
        </li>
    );
};

export default Pill;
