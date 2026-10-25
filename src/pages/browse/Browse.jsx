import "./Browse.css";
import Pill from "../../components/pill/Pill";
import MovieCard from "../../components/movie-card/MovieCard";
import dune from "../../images/posters/dune.jpg";
import spiderman from "../../images/posters/s-man.jpg";
import joker from "../../images/posters/joker.jpg";
import avengers from "../../images/posters/avngers.jpg";
import lostworld from "../../images/posters/lostworld.jpg";
import jpark from "../../images/posters/jpark.jpg";
import jaws2 from "../../images/posters/jaws2.jpg";
import jaws from "../../images/posters/jaws.jpg";

const Browse = () => {
    return (
        <div className="browse">
            <section className="browse-top">
                <h1 className="page-title">Explore Movies</h1>
                <select id="sort">
                    <option value="newest">Sort: Newest</option>
                    <option value="rating">Sort: Rating</option>
                    <option value="title">Sort: A-Z</option>
                </select>
            </section>
            <nav className="genre-filter">
                <ul>
                    <Pill name="All" active={true} />
                    <Pill name="Action" />
                    <Pill name="Comedy" />
                    <Pill name="Drama" />
                    <Pill name="Sci-Fi" />
                    <Pill name="Horror" />
                    <Pill name="Thriller" />
                    <Pill name="Romance" />
                    <Pill name="Animation" />
                </ul>
            </nav>
            <section className="movie-grid">
                <MovieCard image={dune} title="Dune: Part Two" year="2024" genre="Sci-Fi" rating="8.0" link="/movie" />
                <MovieCard image={spiderman} title="Spider-Man" year="2021" genre="Action" rating="9.1" link="/browse" />
                <MovieCard image={joker} title="Joker" year="2019" genre="Drama" rating="8.9" link="/browse" />
                <MovieCard image={avengers} title="The Avengers" year="2012" genre="Action" rating="9.2" link="/browse" />
                <MovieCard image={lostworld} title="The Lost World" year="1997" genre="Sci-Fi" rating="6.6" link="/browse" />
                <MovieCard image={jpark} title="Jurassic Park" year="1993" genre="Sci-Fi" rating="9.0" link="/movie" />
                <MovieCard image={jaws2} title="Jaws 2" year="1978" genre="Horror" rating="5.8" link="/browse" />
                <MovieCard image={jaws} title="Jaws" year="1975" genre="Thriller" rating="8.3" link="/browse" />
            </section>
            <nav className="pagination">
                <button type="button">Previous</button>
                <button type="button" className="active">1</button>
                <button type="button">2</button>
                <button type="button">3</button>
                <button type="button">Next</button>
            </nav>
        </div>
    );
};

export default Browse;
