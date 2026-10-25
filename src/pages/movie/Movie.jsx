import "./Movie.css";
import CastCard from "../../components/cast-card/CastCard";
import ReviewCard from "../../components/review-card/ReviewCard";
import DetailItem from "../../components/detail-item/DetailItem";
import MovieCard from "../../components/movie-card/MovieCard";
import jpark from "../../images/posters/jpark.jpg";
import jaws from "../../images/posters/jaws.jpg";
import dune from "../../images/posters/dune.jpg";
import avengers from "../../images/posters/avngers.jpg";
import spiderman from "../../images/posters/s-man.jpg";

const Movie = () => {
    return (
        <div className="movie-page">
            <section className="movie-hero">
                <img src={jpark} alt="Jurassic Park poster" />
                <article className="movie-intro">
                    <p className="movie-label">Featured Movie</p>
                    <h1>Jurassic Park</h1>
                    <p className="movie-facts">
                        1993 &nbsp;|&nbsp; 2h 7m &nbsp;|&nbsp; <span className="rating">&#9733; 9.0</span>
                    </p>
                    <p className="movie-tags">
                        <span className="tag">Sci-Fi</span>
                        <span className="tag">Adventure</span>
                        <span className="tag">Thriller</span>
                    </p>
                </article>
            </section>
            <div className="movie-body">
                <div className="movie-main">
                    <section className="synopsis">
                        <h2 className="section-title">Synopsis</h2>
                        <p>
                            An island of prehistoric dinosaurs becomes a fight for survival when the park
                            attractions escape their enclosures. Every step brings new danger, leaving one
                            question. Who will make it out alive? John Hammond creates a theme park filled
                            with cloned dinosaurs, but when the power shuts down, a group of scientists and
                            his grandchildren must escape the island.
                        </p>
                    </section>
                    <section className="cast">
                        <h2 className="section-title">Starring Cast</h2>
                        <div className="cast-row">
                            <CastCard initials="SN" name="Sam Neill" role="Dr. Alan Grant" />
                            <CastCard initials="LD" name="Laura Dern" role="Dr. Ellie Sattler" />
                            <CastCard initials="JG" name="Jeff Goldblum" role="Dr. Ian Malcolm" />
                            <CastCard initials="RA" name="Richard Attenborough" role="John Hammond" />
                        </div>
                    </section>
                    <section className="reviews">
                        <h2 className="section-title">Community Reviews</h2>
                        <ReviewCard
                            user="RaptorJeff"
                            rating="9.5"
                            text="An absolute masterpiece. The effects still hold up better than most movies made today, and the tension in the kitchen scene is unmatched."
                        />
                        <ReviewCard
                            user="CrayJoMovies"
                            rating="9.0"
                            text="A perfect mix of practical effects and computer graphics. The reveal of the first dinosaur is still one of the greatest moments in movie history."
                        />
                        <ReviewCard
                            user="Discover93"
                            rating="8.5"
                            text="A classic blockbuster that defined a generation. The score gives me goosebumps every single time."
                        />
                    </section>
                </div>
                <aside className="movie-details">
                    <h2 className="section-title">Details</h2>
                    <DetailItem label="Director" value="Steven Spielberg" />
                    <DetailItem label="Writer" value="Michael Crichton" />
                    <DetailItem label="Studio" value="Universal Pictures" />
                    <DetailItem label="Budget" value="63 Million" />
                </aside>
            </div>
            <section className="similar">
                <h2 className="section-title">You Might Also Like</h2>
                <div className="similar-row">
                    <MovieCard image={jaws} title="Jaws" year="1975" genre="Thriller" rating="8.3" link="/movie" />
                    <MovieCard image={dune} title="Dune: Part Two" year="2024" genre="Sci-Fi" rating="8.0" link="/browse" />
                    <MovieCard image={avengers} title="The Avengers" year="2012" genre="Action" rating="9.2" link="/browse" />
                    <MovieCard image={spiderman} title="Spider-Man" year="2021" genre="Action" rating="9.1" link="/browse" />
                </div>
            </section>
        </div>
    );
};

export default Movie;
