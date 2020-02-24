import React from 'react';
import {Container, Grid, Typography} from "@material-ui/core";
import SideMenu from "../../containers/SideMenu/SideMenu";
import BookOverview from "../BookOverview/BookOverview";

const categoryPage = (props) => (
    <main>
        <Grid container>
            <SideMenu sm={2} xs={12}/>
            <Grid item sm={10} xs={12}>
                <div className={props.classes.heroContent}>
                    <Typography variant={'h4'}
                                component={'h5'}
                                gutterBottom noWrap
                                align={'center'}>
                        Vous êtes dans la catégorie {props.categoryId}
                    </Typography>
                    <Container maxWidth="lg">
                        <input type={"text"} placeholder={"Entrez le nom d'un livre"}/>
                        <hr/>
                        <Grid container spacing={4}>
                            <BookOverview classes={props.classes}/>
                            <BookOverview classes={props.classes}/>
                            <BookOverview classes={props.classes}/>
                            <BookOverview classes={props.classes}/>
                            <BookOverview classes={props.classes}/>
                            <BookOverview classes={props.classes}/>
                        </Grid>
                    </Container>
                </div>
            </Grid>
        </Grid>
    </main>
);

export default categoryPage;