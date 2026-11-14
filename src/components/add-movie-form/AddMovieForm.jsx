import "./AddMovieForm.css";
import {useState} from "react";

const AddMovieForm = (props) => {
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("");
    const [preview, setPreview] = useState("");

    // shows small copy of the poster the user chose
    const onImageChange = (e) => {
        if (e.target.files.length > 0) {
            setPreview(URL.createObjectURL(e.target.files[0]));
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        setStatus("");
        setResult("Adding movie...");

        try {
            const response = await fetch(props.serverUrl + "api/movies", {
                method: "POST",
                body: formData
            });

            if (response.status === 200) {
                const movie = await response.json();
                setResult(movie.title + " was added! You can find it at the end of the list.");
                setStatus("success");
                form.reset();
                setPreview("");
                props.onAdd(movie);
            } else {
                setResult("Error: " + await response.text());
                setStatus("error");
            }
        } catch (error) {
            setResult("Sorry, we couldn't reach the server. Please try again.");
            setStatus("error");
        }
    };

    return (
        <section className="add-movie">
            <h2 className="section-title">Add a Movie</h2>
            <form className="add-movie-form" onSubmit={onSubmit}>
                <div className="add-movie-fields">
                    <p className="full">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" minLength="1" maxLength="50" required />
                    </p>
                    <p>
                        <label htmlFor="year">Year</label>
                        <input type="number" id="year" name="year" min="1900" max={new Date().getFullYear()} step="1" required />
                    </p>
                    <p>
                        <label htmlFor="rating">Rating (0 - 10)</label>
                        <input type="number" id="rating" name="rating" min="0" max="10" step="0.1" required />
                    </p>
                    <p className="full">
                        <label htmlFor="genre">Genre</label>
                        <select id="genre" name="genre" required>
                            <option value="">Pick a genre</option>
                            <option value="Action">Action</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Drama">Drama</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Horror">Horror</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Romance">Romance</option>
                            <option value="Animation">Animation</option>
                        </select>
                    </p>
                    <p className="full">
                        <label htmlFor="description">Description (optional)</label>
                        <textarea id="description" name="description" rows="4" maxLength="500"></textarea>
                    </p>
                </div>
                <div className="add-movie-poster">
                    <label htmlFor="img">Poster</label>
                    <p className="poster-box">
                        {preview !== "" && <img src={preview} alt="Poster preview" />}
                        {preview === "" && <span>No poster picked yet</span>}
                    </p>
                    <input type="file" id="img" name="img" accept="image/*" onChange={onImageChange} required />
                </div>
                <div className="add-movie-bottom">
                    <button type="submit">Add Movie</button>
                    <p className={"result " + status}>{result}</p>
                </div>
            </form>
        </section>
    );
};

export default AddMovieForm;
