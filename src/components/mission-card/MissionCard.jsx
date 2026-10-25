import "./MissionCard.css";

const MissionCard = (props) => {
    return (
        <article className="mission-card">
            <p className="mission-icon">{props.icon}</p>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </article>
    );
};

export default MissionCard;
