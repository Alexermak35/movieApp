import "../css/MovieCard.css"; // Assuming you have a CSS file for styling the MovieCard

function MovieCard({ movie }) {
    function onFavoriteClick() {
        alert("You clicked the favorite button!");
    }


    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overplay">
                <button className="favorite-btn" onClick={onFavoriteClick}>❤️</button>
            </div>

        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.realese_date}</p>
            <span className="movie-rating">Rating: {movie.rating}</span>
        </div>
    </div>
}
export default MovieCard;