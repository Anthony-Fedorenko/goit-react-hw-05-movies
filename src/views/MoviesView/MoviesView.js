import React, { useState, useEffect } from 'react';
import {fetchMovieByQuery, IMAGE_URL} from '../../services/books-api';
import { useRouteMatch, useLocation, useHistory, Link } from "react-router-dom";
import Searchbar from '../../components/PageHeading/PageHeading';
import PropTypes from 'prop-types';
import styles from "../HomeView/HomeView.module.css";


export default function MoviesView() {
    const { url } = useRouteMatch();
    const location = useLocation();
    const history = useHistory();
    const [movies, setMovies] = useState(null);
    const [searchQuery, setSearchQuery] = useState(new URLSearchParams(location.search).get('query') ?? '',);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (searchQuery)
            fetchMovieByQuery(searchQuery)
                .then(request => {
                    setMovies(request.results);
                })
                .catch(error => setError(error.message));
    }, [searchQuery]);

    const onChangeQuery = query => {
        setMovies([]);
        setError(null);
        setSearchQuery(query);
        history.push({
            ...location,
            search: `query=${query}`,
        });
    };

    return (
        <>
            <Searchbar onSubmit={onChangeQuery} />

            {error && (
                <p style={{ color: 'red', textAlign: 'center', fontSize: '20px' }}>
                    This is error: {error}
                </p>
            )}

            <section>
                {movies && (
                    <ul>
                        {movies.map(movie => (
                            <li className={styles.item} key={movie.id} >
                                <Link  to={{
                                    pathname: `${url}/${movie.id}`,
                                    state: { from: location
                                    }
                                }} style={{textDecoration: 'none', color: 'darkslategray'}}><img  className={styles.image} src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.original_title} />
                                    {movie.title}</Link>
                            </li>
                        ))}
                    </ul>)}
            </section>
        </>
    )
}
MoviesView.propTypes = {
    onSubmit: PropTypes.func,
}