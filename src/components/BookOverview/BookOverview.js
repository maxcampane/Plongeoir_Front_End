import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";

const bookOverview = (props) => (
    <Grid item xs={12} sm={6} md={4}>
        <Card className={props.classes.card}>
            <CardMedia
                className={props.classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
            />
            <CardContent className={props.classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    Lorem ipsum
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Voir
                </Button>
                <Button size="small" color="primary">
                    Editer
                </Button>
            </CardActions>
        </Card>
    </Grid>
);

export default bookOverview;