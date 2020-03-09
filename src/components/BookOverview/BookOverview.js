import React from "react";
import { Card, CardActions, CardContent, CardMedia, Grid, Link as MUILink, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as routes_names from "../../config/routes_names";

const bookOverview = (props) => (
    <Grid item xs={12} sm={4} md={3}>
        <Card className={props.classes.card}>
            <CardMedia
                className={props.classes.cardMedia}
                image={props.imageURL}
                title="Image title"
            />
            <CardContent className={props.classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    <Link to={routes_names.BOOKPAGE + "/" + props.bookId}>{props.title}</Link>
                </Typography>
                <Typography noWrap>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <MUILink size="small" color="primary" component={Link} to={routes_names.BOOKPAGE + "/" + props.bookId}>
                    VOIR
                </MUILink>
                <MUILink size="small" color="primary" component={Link} to={routes_names.HOME}>
                    RESERVER
                </MUILink>
            </CardActions>
        </Card>
    </Grid>
);

export default bookOverview;