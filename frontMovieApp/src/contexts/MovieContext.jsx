import { createContext, useState, useContext, useEffect } from "react";
const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);




export const MovieProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([]);
    // localStorage is used to store values within browser in string format
    useEffect(() => {
        const storeedFavorites = localStorage.getItem("favorites");
        if (storeedFavorites) {
            setFavorites(JSON.parse(storeedFavorites));//make it json format to work with
        }
    }, [])
    useEffect(() => {//if favs chnage
        localStorage.setItem("favorites", JSON.stringify(favorites)); //convert bacck to string to store it in browser
    }, [favorites])
    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]);
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}
