import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 645,
        background: 'rgba(0,0,0, 0.5)',
        margin: 20,
    },
    media: {
        height: 440,
    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#FFF',
    },
    description: {
        fontFamily: 'Nunito',
        fontSize: '1rem',
        color: '#ddd',
    }
});

export default function ImageCard(props) {
    const classes = useStyles();
    const { place } = props;

    return (
        <Card className={classes.root}>
            <CardMedia
            className={classes.media}
            image={place.imageUrl}
            title="Contemplative Reptile"
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="h1"
                    className={classes.title}
                >
                {place.title}
            </Typography>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    className={classes.description}
                    component="p">
                {place.description}
            </Typography>
            </CardContent>
        </Card>
    );
}