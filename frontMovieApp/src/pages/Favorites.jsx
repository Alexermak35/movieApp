import "../css/Favorites.css"; // Assuming you have a CSS file for styling the Favorites page
import { useMovieContext } from "../contexts/MovieContext.jsx";
import MovieCard from "../components/movieCard.jsx";

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your favorites</h2>
                <div className="movie-grid">
                    {favorites.map(movie =>
                    (
                        <MovieCard key={movie.id} movie={movie} />
                    )
                    )}
                </div>
            </div>
        )
    }
    return (
        <div className="favorites-empty">
            <h2> No favorite movies yet</h2>
            <p>Start adding some movies to your favorites list!</p>
        </div>
    )
}
export default Favorites;