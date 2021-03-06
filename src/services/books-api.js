const URL = 'https://api.themoviedb.org/3/'
const KEY = 'df8af4df2f1e19e90610f938bcc8cb42'
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

async function fetchMoviesWithErrorHandling(url='', config={}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
    return fetchMoviesWithErrorHandling(`${URL}trending/movie/day?api_key=${KEY}`)
}

export function fetchMovie(movieId) {
    return fetchMoviesWithErrorHandling(`${URL}movie/${movieId}?api_key=${KEY}`)
}

export function fetchMovieActors(movieId) {
    return fetchMoviesWithErrorHandling(`${URL}movie/${movieId}/credits?api_key=${KEY}`)
}

export function fetchMovieReviews(movieId) {
    return fetchMoviesWithErrorHandling(`${URL}movie/${movieId}/reviews?api_key=${KEY}`)
}


export function fetchMovieByQuery(query) {
    return fetchMoviesWithErrorHandling(`${URL}search/movie?api_key=${KEY}&query=${query}`)
}