import "./Movie.css";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import CastCard from "../../components/cast-card/CastCard";
import ReviewCard from "../../components/review-card/ReviewCard";
import DetailItem from "../../components/detail-item/DetailItem";
import MovieCard from "../../components/movie-card/MovieCard";

// movies and images come from render server
const server_url = "https://moviebuzz-backend-fsd2.onrender.com/";

const Movie = () => {
    // the id at the end of the link, like #/movie/6
    const {id} = useParams();
    const [movies, setMovies] = useState([]);

    // runs when the page loads and again when a different movie is clicked
    useEffect(() => {
        window.scrollTo(0, 0);

        const getMovies = async () => {
            const response = await fetch(server_url + "api/movies");
            setMovies(await response.json());
        };
        getMovies();
    }, [id]);

    if (movies.length === 0) {
        return <p className="movie-message">Loading movie...</p>;
    }

    const movie = movies.find((item) => item._id === parseInt(id));

    if (!movie) {
        return <p className="movie-message">Sorry, we couldn't find that movie.</p>;
    }

    // 4 other movies for the bottom of the page
    const otherMovies = movies.filter((item) => item._id !== movie._id).slice(0, 4);

    // darkened poster behind the top of the page
    const heroStyle = {
        backgroundImage: `linear-gradient(rgba(8, 8, 16, 0.85), rgba(8, 8, 16, 0.85)), url(${server_url + movie.img_name})`
    };

    return (
        <div className="movie-page">
            <section className="movie-hero" style={heroStyle}>
                <img src={server_url + movie.img_name} alt={`${movie.title} poster`} />
                <article className="movie-intro">
                    <p className="movie-label">Featured Movie</p>
                    <h1>{movie.title}</h1>
                    <p className="movie-facts">
                        {movie.year} &nbsp;|&nbsp; {movie.runtime && <span>{movie.runtime} &nbsp;|&nbsp; </span>}<span className="rating">&#9733; {movie.rating.toFixed(1)}</span>
                    </p>
                    <p className="movie-tags">
                        {movie.tags && movie.tags.map((tag) => (
                            <span className="tag" key={tag}>{tag}</span>
                        ))}
                        {!movie.tags && <span className="tag">{movie.genre}</span>}
                    </p>
                </article>
            </section>
            <div className="movie-body">
                <div className="movie-main">
                    {movie.trailer && <section className="trailer">
                        <h2 className="section-title">Watch the Trailer</h2>
                        <iframe
                            src={movie.trailer}
                            title={`${movie.title} official trailer`}
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </section>}
                    {movie.description && <section className="synopsis">
                        <h2 className="section-title">Synopsis</h2>
                        <p>{movie.description}</p>
                    </section>}
                    {movie.cast && <section className="cast">
                        <h2 className="section-title">Starring Cast</h2>
                        <div className="cast-row">
                            {movie.cast.map((person) => (
                                <CastCard
                                    key={person.name}
                                    initials={person.name.split(" ").map((word) => word[0]).join("")}
                                    name={person.name}
                                    role={person.role}
                                />
                            ))}
                        </div>
                    </section>}
                    {movie.reviews && <section className="reviews">
                        <h2 className="section-title">Community Reviews</h2>
                        {movie.reviews.map((review) => (
                            <ReviewCard
                                key={review.user}
                                user={review.user}
                                rating={review.rating.toFixed(1)}
                                text={review.text}
                            />
                        ))}
                    </section>}
                </div>
                {movie.director && <aside className="movie-details">
                    <h2 className="section-title">Details</h2>
                    <DetailItem label="Director" value={movie.director} />
                    <DetailItem label="Writer" value={movie.writer} />
                    <DetailItem label="Studio" value={movie.studio} />
                    <DetailItem label="Budget" value={movie.budget} />
                </aside>}
            </div>
            <section className="similar">
                <h2 className="section-title">You Might Also Like</h2>
                <div className="similar-row">
                    {otherMovies.map((item) => (
                        <MovieCard
                            key={item._id}
                            image={server_url + item.img_name}
                            title={item.title}
                            year={item.year}
                            genre={item.genre}
                            rating={item.rating.toFixed(1)}
                            link={"/movie/" + item._id}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Movie;
