import { makeStyles } from '@material-ui/core';
import React from 'react'
import ImageCard from './ImageCard';
import places from '../static/places';

const useStyle = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

const PlaceToVisit = () => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <ImageCard place={places[0]}/>
            <ImageCard place={places[1]}/>
        </div>
    )
}

export default PlaceToVisit
