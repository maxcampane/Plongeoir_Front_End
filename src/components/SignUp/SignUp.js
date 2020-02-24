import React from "react";
import * as routes_names from "../../config/routes_names";

import { CssBaseline, Grid, Paper, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Link as MUILink } from "@material-ui/core";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const signup = (props) => {
    const { classes } = props;

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} className={classes.image}/>
            <Grid item xs={12} elevation={6} square
                  component={Paper} className={classes.absolute}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {"S'inscrire"}
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField autoComplete="fname"
                                           name="firstName"
                                           variant="outlined"
                                           required
                                           fullWidth
                                           id="firstName"
                                           label="Prénom"
                                           autoFocus/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField variant="outlined"
                                           required
                                           fullWidth
                                           id="lastName"
                                           label="Nom"
                                           name="lastName"
                                           autoComplete="lname"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined"
                                           required
                                           fullWidth
                                           id="email"
                                           label="Adresse mail"
                                           name="email"
                                           autoComplete="email"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined"
                                           required
                                           fullWidth
                                           name="password"
                                           label="Mot de passe"
                                           type="password"
                                           id="password"
                                           autoComplete="current-password"/>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="S'abonner à la newsletter."/>
                            </Grid>
                        </Grid>
                        <Button type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}>
                            {"S'inscrire"}
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <MUILink component={Link} to={routes_names.SIGNIN} variant="body2">
                                    {"J'ai déjà un compte"}
                                </MUILink>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
};

export default signup;