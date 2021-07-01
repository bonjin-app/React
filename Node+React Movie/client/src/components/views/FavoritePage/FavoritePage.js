import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './Favorite.css'

function FavoritePage() {

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
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
    }, [])

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
                    {favorites.map((m, i) => (
                        <tr key={i}>
                            <td>{m.movieTitle}</td>
                            <td>{m.movieRunTime} mins</td>
                            <td><button>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FavoritePage;
