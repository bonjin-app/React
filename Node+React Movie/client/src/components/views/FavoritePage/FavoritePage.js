import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './Favorite.css'
import { Popover } from 'antd';
import { API_IMAGE_URL } from '../../Config';

function FavoritePage() {

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        fetchFavorites()

    }, [])

    const fetchFavorites = () => {
        Axios.post('/api/favorite/get', {
            userFrom: localStorage.getItem('userId')
        }).then(response => {
            if (response.data.success) {
                console.log('favorite', response)
                setFavorites(response.data.data)
            } else {
                alert('영화 정보를 가져오는데 실패했습니다.');
            }
        })
    }

    const onClickDelete = (id) => {
        const userFrom = localStorage.getItem('userId');
        const variables = {
            userFrom: userFrom,
            movieId: id
        }

        Axios.post('/api/favorite/remove', variables)
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    fetchFavorites()

                } else {
                    alert("리스트에서 지우는데 실패했습니다.");
                }
            })
    }

    const renderCard = favorites.map((m, i) => {
        const content = (
            <div>
                {m.moviePost ?
                    <img src={`${API_IMAGE_URL}/w500/${m.moviePost}`} /> : "no image"
                }
            </div>
        )
        return <tr key={i}>
            <Popover content={content} title={m.movieTitle}>
                <td>
                    {m.movieTitle}
                </td>
            </Popover >
            <td>{m.movieRunTime} mins</td>
            <td><button onClick={() => onClickDelete(m.movieId)}>Remove</button></td>
        </tr>
    })



    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h2>Favorite Movies</h2>
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Movie RunTime</th>
                        <th>Movie from favorites</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCard}
                </tbody>
            </table>
        </div>
    )
}

export default FavoritePage;
