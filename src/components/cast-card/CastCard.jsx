import "./CastCard.css";

const CastCard = (props) => {
    return (
        <article className="cast-card">
            <p className="cast-photo">{props.initials}</p>
            <h3>{props.name}</h3>
            <p className="cast-role">{props.role}</p>
        </article>
    );
};

export default CastCard;
