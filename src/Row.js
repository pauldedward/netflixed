import React from 'react'
import './Row.css'
import axios from './axios';

function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = React.useState([]);
    const baseURL = 'https://image.tmdb.org/t/p/original/';

    React.useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL])

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie => {
                    const imgURL = `${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`
                        return ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) ? (
                                <img 
                                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                                key={movie.id} 
                                src={imgURL} 
                                alt={movie.title} />
                            ) : null
                })}
            </div>
        </div>
    )
}

export default Row