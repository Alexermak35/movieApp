import "../css/MovieCard.css"; // Assuming you have a CSS file for styling the MovieCard
import {
    useMovieContext

} from "../contexts/MovieContext.jsx";
import { useContext } from "react";

function MovieCard({ movie }) {

    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavoriteClick(e) {
        // alert("You clicked the favorite button!");
        e.preventDefault();
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }


    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overplay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    {favorite ? "❤️" : "🤍"}
                </button>
            </div>

        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.realese_date?.split("-")[0]}</p>

        </div>
    </div>
}
export default MovieCard;