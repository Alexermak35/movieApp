import "../css/MovieCard.css"; // Assuming you have a CSS file for styling the MovieCard

function MovieCard({ movie }) {

    function onFavoriteClick() {
        alert("You clicked the favorite button!");
    }


    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overplay">
                <button className="favorite-btn" onClick={onFavoriteClick}>❤️</button>
            </div>

        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.realese_date?.split("-")[0]}</p>

        </div>
    </div>
}
export default MovieCard;