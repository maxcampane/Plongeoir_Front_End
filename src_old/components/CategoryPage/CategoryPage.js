import React from 'react';
import {
    Container,
    Grid,
    Typography,
    FormLabel,
    TextField,
    FormGroup,
    FormControlLabel,
    CssBaseline
} from "@material-ui/core";
import SideMenu from "../../containers/SideMenu/SideMenu";

const categoryPage = (props) => {
    const { classes } = props;

    const label = <FormLabel>Entrez le nom d'un livre : </FormLabel>,
        textField = <TextField id="filled-search" type="search"
                               className={classes.searchInput}
                               error={props.isInputInvalid}
                               onChange={props.onFilterChange}/>;

    return (
        <Grid container>
            <SideMenu sm={2} xs={12}/>
            <Grid item sm={10} xs={12}>
                <div className={classes.heroContent}>
                    <Typography className={classes.categoryPageTitle}
                                component={'h6'}
                                gutterBottom noWrap
                                align={'center'}>
                        Vous êtes dans la catégorie {props.categoryName}
                    </Typography>
                    <div>
                        <Container maxWidth='xl'>
                            <FormGroup row className={classes.formGroup}>
                                <FormControlLabel label={label} control={textField}
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