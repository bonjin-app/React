import Axios from 'axios';
import React, { useEffect } from 'react'

function Favorite(props) {

    const movieId = props.movieId;
    const userFrom = props.userFrom;
    const movieInfo = props.movieInfo;

    const movieTitle = movieInfo.title;
    const moviePost = movieInfo.backdrop_path;
    const movieRunTime = movieInfo.runtime;

    useEffect(() => {
        console.error("Favorite useEffect")
        let variables = {
            movieId,
            userFrom
        }
        Axios.post('/api/favorite/number', variables)
            .then(response => {
                if (response.data.success) {
                    console.log(response)
                } else {
                    alert('숫자 정보를 가져오는데 실패 했습니다.');
                }
            })
    }, [])

    return (
        <div>

            <button>Favorite</button>
        </div>
    )
}

export default Favorite;
