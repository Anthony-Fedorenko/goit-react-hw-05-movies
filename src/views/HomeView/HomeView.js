import { useState, useEffect } from "react";
import { NavLink, useRouteMatch, useLocation } from "react-router-dom";
import * as moviesFetchAPI from '../../services/books-api';
import styles from './HomeView.module.css'
import {IMAGE_URL} from "../../services/books-api";

export default function HomeView() {
    const { url } = useRouteMatch();
    const location = useLocation();
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        moviesFetchAPI.fetchTrendingMovies().then(data => setMovies(data.results));
    }, [])

    return(
        <>
            <h2 className={styles.name}>Trending film</h2>
            {movies && (
                <ul>
                    {movies.map(movie => (
                        <li className={styles.item} key={movie.id} >
                            <NavLink to={{
                                pathname: `${url}movies/${movie.id}`,
                                state: { from: location }

                            }} style={{textDecoration: 'none', color: 'darkslategray'}}><img  className={styles.image} src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.original_title} />
                                {movie.title}</NavLink>
                        </li>
                    ))}
                </ul>)}
        </>
    )
}