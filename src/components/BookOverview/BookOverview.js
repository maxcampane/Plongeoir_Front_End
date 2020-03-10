import React from "react";
import "./BookOverview.css";
import { Card, CardActions, CardContent, CardMedia, Grid, Link as MUILink, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as routes_names from "../../config/routes_names";

const bookOverview = (props) => (
    <Grid item xs={12} sm={4} md={3}>
            <Card className={props.classes.card}>
                <div id="content">
                    <CardMedia
                        className={props.classes.cardMedia}
                        image={props.imageURL}
                        title="Image title"
                    />
                    <div className={props.className}/>
                </div>
                <CardContent className={props.classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        <Link to={routes_names.BOOKPAGE + "/" + props.bookId} style={{color: props.titleColor}}>{props.title}</Link>
                    </Typography>
                    <Typography noWrap>
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <MUILink size="small" color="primary" component={Link} to={routes_names.BOOKPAGE + "/" + props.bookId}>
                        VOIR
                    </MUILink>
                    {props.actionButton}
                </CardActions>
            </Card>
    </Grid>
);

export default bookOverview;