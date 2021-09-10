import { useState, useEffect } from "react";
import { fetchMovieActors, IMAGE_URL } from '../../services/books-api';
import defaultIcon from '../../defaultIcon.png'
import style from './MovieCastView.module.css'

export default function MovieCastView({ movieId }) {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchMovieActors(movieId).then(data => setMovie(data));
    }, [movieId]);

    return(
        <>
            <ul >
                {movie && movie.cast && movie.cast.map((actor, idx) =>
                    (<li className={style.item} key={idx} >
                        { actor.profile_path ? <img  className={style.img} src={`${IMAGE_URL}${actor.profile_path}`} alt={actor.name} /> : <img className={style.img} src={defaultIcon} alt={actor.name} />  }
                        <p>{actor.name}</p>
                        <p>Character: {actor.character}</p>
                    </li>)
                )}

            </ul>
        </>
    )
}
