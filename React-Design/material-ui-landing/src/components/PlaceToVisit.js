import { makeStyles } from '@material-ui/core';
import React from 'react'
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';

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
    const checked = useWindowPosition('header');

    return (
        <div className={classes.root}>
            <ImageCard place={places[0]} checked={checked}/>
            <ImageCard place={places[1]} checked={checked}/>
        </div>
    )
}

export default PlaceToVisit
