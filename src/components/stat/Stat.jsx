import "./Stat.css";

const Stat = (props) => {
    return (
        <article className="stat">
            <h3>{props.value}</h3>
            <p>{props.label}</p>
        </article>
    );
};

export default Stat;
