import "./Browse.css";
import {useState, useEffect} from "react";
import {Tooltip} from "react-tooltip";
import Pill from "../../components/pill/Pill";
import MovieCard from "../../components/movie-card/MovieCard";
import AddMovieForm from "../../components/add-movie-form/AddMovieForm";

// movies and images come from render server
const server_url = "https://moviebuzz-backend-fsd2.onrender.com/";

const Browse = () => {
    const [movies, setMovies] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const getMovies = async () => {
            const response = await fetch(server_url + "api/movies");
            setMovies(await response.json());
        };
        getMovies();
    }, []);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    // list updates right away
    const addMovie = (movie) => {
        setMovies([...movies, movie]);
    };

    let formButtonText = "+ Add a Movie";

    if (showForm) {
        formButtonText = "Close Form";
    }

    return (
        <div className="browse">
            <section className="browse-top">
                <h1 className="page-title">Explore Movies</h1>
                <div className="browse-actions">
                    <button type="button" className="add-button" onClick={toggleForm}>{formButtonText}</button>
                    <select id="sort">
                        <option value="newest">Sort: Newest</option>
                        <option value="rating">Sort: Rating</option>
                        <option value="title">Sort: A-Z</option>
                    </select>
                </div>
            </section>
            {showForm && <AddMovieForm serverUrl={server_url} onAdd={addMovie} />}
            <nav className="genre-filter">
                <ul>
                    <Pill name="All" tip="Every movie in our catalog" active={true} />
                    <Pill name="Action" tip="Explosions, chases, and big fights" />
                    <Pill name="Comedy" tip="Movies made to make you laugh" />
                    <Pill name="Drama" tip="Serious, character driven stories" />
                    <Pill name="Sci-Fi" tip="Space, science, and the future" />
                    <Pill name="Horror" tip="Scary movies best watched with the lights on" />
                    <Pill name="Thriller" tip="Suspense that keeps you on the edge of your seat" />
                    <Pill name="Romance" tip="Love stories and happy endings" />
                    <Pill name="Animation" tip="Animated films for all ages" />
                </ul>
                <Tooltip id="pill-tip" />
            </nav>
            {movies.length === 0 && <p className="loading">Loading movies...</p>}
            <section className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie._id}
                        image={server_url + movie.img_name}
                        title={movie.title}
                        year={movie.year}
                        genre={movie.genre}
                        rating={movie.rating.toFixed(1)}
                        link={"/movie/" + movie._id}
                    />
                ))}
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
