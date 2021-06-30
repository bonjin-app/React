import React, { Fragment, useEffect, useState } from 'react';
import { API_URL, API_KEY, API_IMAGE_URL } from '../../Config';
import GridCard from '../Commons/GridCard';
import MainImage from './Sections/MainImage';
import { Row } from 'antd';

function LandingPage() {
    const [movies, setMovies] = useState([]);
    const [mainMovieImage, setMainMovieImage] = useState(null)
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        const endpoint = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`;
        fetchMovies(endpoint)
    }, [])

    const loadMoreItems = () => {
        const endpoint = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`;
        fetchMovies(endpoint)
    }

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                // setMovies([...movies, ...response.results])
                setMovies(movies.concat(response.results))
                setMainMovieImage(movies[0])
                setCurrentPage(response.page)
            })
    }

    return (
        <div style={{ width: '100%', margin: '0' }}>
            {/* <MainImage iamge={`${API_IMAGE_URL}/w1280/${mainMovieImage?.backdrop_path}`} /> */}
            {mainMovieImage &&
                <MainImage image={`${API_IMAGE_URL}/w1280/${mainMovieImage.backdrop_path}`}
                    title={mainMovieImage.original_title}
                    description={mainMovieImage.overview} />
            }
            <div style={{ width: '85%', margin: '1rem auto' }}>
                <h2>Movies by latest</h2>
                <hr />

                {/* Movie Grid Cards*/}

                <Row gutter={[16, 16]}>
                    {movies && movies.map((m, i) => (
                        <Fragment key={i}>
                            <GridCard
                                image={m.poster_path ? `${API_IMAGE_URL}/w500${m.poster_path}` : ''}
                                movieId={m.id}
                                movieName={m.original_title}
                            />
                        </Fragment>
                    ))
                    }
                </Row>

            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={loadMoreItems}> Load More </button>
            </div>
        </div>
    )
}

export default LandingPage
