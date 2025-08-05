import MovieCard from "../components/movieCard"
import { useState } from 'react';
function Home() {
    const movies = [

        { id: 1, title: "Inception", release_date: 2010, rating: 8.8 },
        { id: 2, title: "The Dark Knight", release_date: 2008 },
        { id: 3, title: "Interstellar", release_date: 2014 }
    ]

    const [toSearch, setToSearch] = useState("");

    const handleSearch = (e) => {
        // This function would typically make an API call to search for movies
        // For now, we will just log the search term
        e.preventDefault(); // Prevent form reload
        alert(`Searching for: ${toSearch}`);
        setToSearch(""); // Clear the search input after submission
    }



    return (<div className="App-header">
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for a movie..." className="search-input" value={toSearch}
                    onChange={(e) => setToSearch(e.target.value)} />
                <button type="submit" className="search-button" onClick={handleSearch}>Search</button>
            </form>

            <div className="movie-grid">
                {movies.map(movie =>
                (
                    <MovieCard key={movie.id} movie={movie} />
                )
                )}
            </div>
        </div>
    </div>
    );
}

export default Home;