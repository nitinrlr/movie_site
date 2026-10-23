import "./Home.css";
import Hero from "../../components/hero/Hero";
import MovieCard from "../../components/movie-card/MovieCard";
import GenreCard from "../../components/genre-card/GenreCard";
import avengers from "../../images/posters/avngers.jpg";
import jaws from "../../images/posters/jaws.jpg";
import joker from "../../images/posters/joker.jpg";
import dune from "../../images/posters/dune.jpg";
import spiderman from "../../images/posters/s-man.jpg";
import action from "./images/action.png";
import comedy from "./images/comedy.png";
import scifi from "./images/sci-fi.png";

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <section className="buzzing">
                <h2 className="row-title">Buzzing Right Now</h2>
                <div className="movie-row">
                    <MovieCard image={avengers} title="The Avengers" rating="9.2" link="/movie" />
                    <MovieCard image={jaws} title="Jaws" rating="8.3" link="/browse" />
                    <MovieCard image={joker} title="Joker" rating="8.9" link="/browse" />
                    <MovieCard image={dune} title="Dune" rating="8.0" link="/browse" />
                    <MovieCard image={spiderman} title="Spider-Man" rating="9.1" link="/browse" />
                    <button className="row-arrow" aria-label="See more movies">&#8250;</button>
                </div>
            </section>
            <section className="genres">
                <h2 className="row-title">Famous Genres</h2>
                <div className="genre-row">
                    <GenreCard image={action} name="Action" tagline="Lots of Thrills" />
                    <GenreCard image={comedy} name="Comedy" tagline="Lots of Laughter" />
                    <GenreCard image={scifi} name="Sci-Fi" tagline="Lots of Woah" />
                    <button className="row-arrow" aria-label="See more genres">&#8250;</button>
                </div>
            </section>
        </div>
    );
};

export default Home;
