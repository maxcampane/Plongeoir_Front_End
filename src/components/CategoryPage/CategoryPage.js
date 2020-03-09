import React from 'react';
import {
    Container,
    Grid,
    Typography,
    FormGroup,
    FormControlLabel,
    CssBaseline
} from "@material-ui/core";
import SideMenu from "../../containers/SideMenu/SideMenu";

const categoryPage = (props) => {
    const { classes } = props;

    return (
        <Grid container>
            <SideMenu sm={2} xs={12}/>
            <Grid item sm={10} xs={12}>
                <div className={classes.heroContent}>
                    <Typography className={classes.categoryPageTitle}
                                variant={'h5'} gutterBottom noWrap
                                align={'center'}>
                        Vous êtes dans la catégorie : {props.categoryName}
                    </Typography>
                    <div>
                        <Container maxWidth='xl'>
                            <FormGroup row className={classes.formGroup}>
                                <FormControlLabel label={props.label} control={props.textField}
                                                  labelPlacement="start"/>
                            </FormGroup>

                            <CssBaseline/>
                            <hr/>

                            <Grid container spacing={4}>
                                {props.booksOverview}
                            </Grid>
                        </Container>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
};

export default categoryPage;