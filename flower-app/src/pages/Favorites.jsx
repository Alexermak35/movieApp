import "../css/Favorites.css"; // Assuming you have a CSS file for styling the Favorites page
function Favorites() {
    return (
        <div className="favorites-empty">
            <h2> No favorite movies yet</h2>
            <p>Start adding some movies to your favorites list!</p>
        </div>
    )
}
export default Favorites;