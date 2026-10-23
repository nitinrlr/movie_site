import "./MovieCard.css";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
    return (
        <article className="movie-card">
            <Link to={props.link}>
                <img src={props.image} alt={`${props.title} poster`} />
            </Link>
            <p className="movie-rating">&#9733; {props.rating}</p>
        </article>
    );
};

export default MovieCard;
