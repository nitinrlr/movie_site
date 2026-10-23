import "./GenreCard.css";
import {Link} from "react-router-dom";

const GenreCard = (props) => {
    return (
        <article className="genre-card">
            <Link to="/browse">
                <img src={props.image} alt={`${props.name} genre`} />
                <div className="genre-info">
                    <h3>{props.name}</h3>
                    <p>{props.tagline}</p>
                </div>
            </Link>
        </article>
    );
};

export default GenreCard;
