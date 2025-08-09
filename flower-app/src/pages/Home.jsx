import MovieCard from "../components/movieCard"
import { use, useState } from 'react';
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"; // Assuming you have a CSS file for styling the Home page
import { useEffect } from "react";


function Home() {
    const [movies, setMovies] = useState([]);
    const [toSearch, setToSearch] = useState("");
    const [err, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.error("Error fetching popular movies:", err);
                setError("Failed to fetch popular movies. Please try again later.");
            }
            finally {
                setLoading(false); // Set loading to false after fetching movies}
            }
        }
        loadPopularMovies();
    }, [])



    const handleSearch = async (e) => {
        // This function would typically make an API call to search for movies
        // For now, we will just log the search term
        e.preventDefault(); // Prevent form reload


        if (!toSearch.trim()) return
        if (loading) return // Prevent multiple searches while loading
        setLoading(true)
        try {
            const searchResults = await searchMovies(toSearch);
            setMovies(searchResults)
            setError(null) // Clear any previous errors
        } catch (err) {
            setError("Failed to search for movies")

        } finally {
            setLoading(false) // Set loading to false after search
        }

    }



    return (<div className="App-header">
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for a movie..." className="search-input" value={toSearch}
                    onChange={(e) => setToSearch(e.target.value)} />
                <button type="submit" className="search-button" >Search</button>
            </form>



            {err && <div className="error-message">{err}</div>}
            {loading ? (<div className="loading">Loading...</div>) : (<div className="movie-grid">
                {movies.map(movie =>
                (
                    <MovieCard key={movie.id} movie={movie} />
                )
                )}
            </div>)}

        </div>
    </div>
    );
}

export default Home;