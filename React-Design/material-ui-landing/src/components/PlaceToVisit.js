import { makeStyles } from '@material-ui/core';
import React from 'react'

const useStyle = makeStyles((theme) => ({
    root: {
        height: '100vh',
    }
}));

const PlaceToVisit = () => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            PlaceToVisit
        </div>
    )
}

export default PlaceToVisit
