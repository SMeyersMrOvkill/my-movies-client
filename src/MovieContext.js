import React from 'react';

const MovieContext = React.createContext({
    movies: [],
    fetchMovies: () => {}
})

export default MovieContext;