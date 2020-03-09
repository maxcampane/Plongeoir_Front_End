import React from "react";
import {
    Card,
    Container,
    Grid,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Button,
    CardActions
} from "@material-ui/core";
import SideMenu from "../../containers/SideMenu/SideMenu";

const bookPage = (props) => {
    return (
        <Grid container>
            <SideMenu sm={2} xs={12}/>
            <Grid item sm={10} xs={12}>
                <Container maxWidth="md" className={props.classes.container}>
                    <Card classes={props.classes.paper}  style={{height: "100%"}}>
                        <CardActionArea>
                            <CardMedia component="img"
                                       alt={props.book.title.replace(" ", "_").toLowerCase()}
                                       height="300"
                                       image={props.book.imageURL}
                                       title={props.book.title}/>
                        </CardActionArea>
                        <CardContent style={{marginTop: "20px"}}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.book.title}
                            </Typography>
                            <hr/>
                            <Typography variant="body2" color="textSecondary" component="p" style={{marginTop: "50px"}}>
                                {props.book.description}
                            </Typography>
                        </CardContent>
                        <CardActions style={{marginTop: "50px"}}>
                            <Button size="small" color="primary">
                                Réserver
                            </Button>
                        </CardActions>
                    </Card>
                </Container>
            </Grid>
        </Grid>
    )
};

export default bookPage;