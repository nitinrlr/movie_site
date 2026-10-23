import "./HeroSlide.css";
import {Link} from "react-router-dom";

const HeroSlide = (props) => {
    // only the first slide shows until the slideshow works
    let slideClass = "hero-slide";

    if (props.hidden) {
        slideClass = "hero-slide hidden";
    }

    return (
        <div className={slideClass}>
            <img src={props.image} alt={props.title} />
            <article className="hero-info">
                <p className="hero-label">Featured Movie</p>
                <h2>{props.title}</h2>
                <p className="hero-desc">{props.description}</p>
                <p className="hero-rating">&#9733; {props.rating}</p>
                <Link to={props.link} className="hero-details">{props.linkText}</Link>
            </article>
        </div>
    );
};

export default HeroSlide;
