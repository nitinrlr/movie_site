import "./MovieCard.css";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
    // home cards only pass a rating, browse cards also pass a year and genre
    const showDetails = props.year !== undefined;

    return (
        <article className="movie-card">
            <Link to={props.link}>
                <img src={props.image} alt={`${props.title} poster`} />
                {showDetails && <h3>{props.title}</h3>}
            </Link>
            {showDetails && <p className="movie-year">{props.year}</p>}
            <p className="movie-meta">
                {showDetails && <span className="tag">{props.genre}</span>}
                <span className="rating">&#9733; {props.rating}</span>
            </p>
        </article>
    );
};

export default MovieCard;
