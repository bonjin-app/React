import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY, API_IMAGE_URL } from '../../Config';
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './Sections/MovieInfo';

function MovieDetail(props) {

    const { id } = props.match.params

    const [movie, setMovie] = useState([])

    useEffect(() => {
        fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(response => {
                setMovie(response)
            })
    }, [])

    return (
        <div>
            {/* Header */}
            <MainImage image={`${API_IMAGE_URL}/w1280/${movie.backdrop_path}`}
                title={movie.original_title}
                description={movie.overview} />

            {/* Body */}
            <div style={{ width: '85%', margin: '1rem auto' }}>
                {/* Movie Info */}
                <MovieInfo movie={movie} />
                <br />

                {/* Actor Grid */}
                <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                    <button>Toggle Actor View</button>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;
