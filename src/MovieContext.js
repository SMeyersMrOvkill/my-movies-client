import React from 'react';

const MovieContext = React.createContext({
    movies: [],
    fetchMovies: () => {},
    addMovie: (movie) => {},
    editMovie: (movie) => {},
    deleteMovie: (movieId) => {}
})

export default MovieContext;