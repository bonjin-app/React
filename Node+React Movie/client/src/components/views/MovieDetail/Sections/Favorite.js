import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'antd';

function Favorite(props) {

    const movieId = props.movieId;
    const userFrom = props.userFrom;
    const movieInfo = props.movieInfo;

    const movieTitle = movieInfo.title;
    const moviePost = movieInfo.backdrop_path;
    const movieRunTime = movieInfo.runtime;

    const [favoriteCount, setFavoriteCount] = useState(0);
    const [favorited, setFavorited] = useState(false);

    let variables = {
        movieId: movieId,
        userFrom: userFrom,
        movieTitle: movieTitle,
        moviePost: moviePost,
        movieRunTime: movieRunTime
    }

    useEffect(() => {
        Axios.post('/api/favorite/number', variables)
            .then(response => {
                if (response.data.success) {
                    setFavoriteCount(response.data.data)

                } else {
                    alert('숫자 정보를 가져오는데 실패 했습니다.');
                }
            })

        Axios.post('/api/favorite/favorited', variables)
            .then(response => {
                if (response.data.success) {
                    setFavorited(response.data.data)

                } else {
                    alert('정보를 가져오는데 실패 했습니다.');
                }
            })
    }, [])

    const onClickFavorite = () => {
        if (favorited) {
            Axios.post('/api/favorite/remove', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavoriteCount(favoriteCount - 1)
                        setFavorited(false)
                    } else {
                        alert('Favorite 리스트에서 지우는걸 실패했습니다.');
                    }
                })

        } else {
            Axios.post('/api/favorite/add', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavoriteCount(favoriteCount + 1)
                        setFavorited(true)
                    } else {
                        alert('Favorite 리스트에서 추가하는걸 실패했습니다.');
                    }
                })
        }
    }

    return (
        <div>
            <Button onClick={onClickFavorite}>{favoriteCount ? 'Not Favorite' : 'Add to Favorite'} {favoriteCount}</Button>
        </div>
    )
}

export default Favorite;
