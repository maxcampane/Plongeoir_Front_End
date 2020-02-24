import React from "react";
import * as routes_names from "../../config/routes_names";
import { CssBaseline, Grid, Paper, Avatar, Typography,
        TextField, FormControlLabel, Checkbox,
        Button, Link as MUILink } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";

const signin = (props) => {
    const { classes } = props;
    const rememberMe = <Checkbox value="remember" color="primary" />;

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
                        Se connecter
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField variant="outlined"
                                   margin="normal"
                                   required fullWidth
                                   type="email"
                                   id="email"
                                   label="Adresse email"
                                   name="email"
                                   autoComplete="email"
                                   autoFocus/>
                        <TextField variant="outlined"
                                   margin="normal"
                                   required fullWidth
                                   name="password"
                                   label="Mot de passe"
                                   type="password"
                                   id="password"
                                   autoComplete="current-password"/>
                        <FormControlLabel control={rememberMe}
                                          label="Enregistrer mes identifiants"/>
                        <Button type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}>
                            Se connecter
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    {"Mot de passe oublié"}
                                </Link>
                            </Grid>
                            <Grid item>
                                <MUILink component={Link} to={routes_names.SIGNUP} variant="body2">
                                    {"Je n'ai pas de compte"}
                                </MUILink>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
};

export default signin;