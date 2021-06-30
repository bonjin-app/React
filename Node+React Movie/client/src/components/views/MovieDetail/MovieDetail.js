import React, { Fragment, useEffect, useState } from 'react'
import { API_URL, API_KEY, API_IMAGE_URL } from '../../Config';
import GridCard from '../Commons/GridCard';
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './Sections/MovieInfo';
import { Row } from 'antd';
import Favorite from './Sections/Favorite';

function MovieDetail(props) {

    const { id } = props.match.params

    const [movie, setMovie] = useState([])
    const [casts, setCasts] = useState([])
    const [actorToggle, setActorToggle] = useState(false)

    useEffect(() => {
        fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(response => {
                setMovie(response)
            })

        fetch(`${API_URL}/movie/${id}/credits?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setCasts(response.cast)
            })
    }, [])

    const toggleActorView = () => {
        setActorToggle(!actorToggle);
    }

    return (
        <div>
            {/* Header */}
            <MainImage image={`${API_IMAGE_URL}/w1280/${movie.backdrop_path}`}
                title={movie.original_title}
                description={movie.overview} />

            {/* Body */}
            <div style={{ width: '85%', margin: '1rem auto' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Favorite movieInfo={movie}
                        movieId={id}
                        userFrom={window.localStorage.getItem('userId')} />
                </div>

                {/* Movie Info */}
                <MovieInfo movie={movie} />
                <br />

                {/* Actor Grid */}
                <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                    <button onClick={toggleActorView}>Toggle Actor View</button>
                </div>

                {actorToggle &&
                    <Row gutter={[16, 16]}>
                        {casts && casts.map((m, i) => (
                            <Fragment key={i}>
                                <GridCard
                                    image={m.profile_path ? `${API_IMAGE_URL}/w500${m.profile_path}` : 'https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png'}
                                    name={m.name}
                                />
                            </Fragment>
                        ))
                        }
                    </Row>
                }
            </div>
        </div>
    )
}

export default MovieDetail;
