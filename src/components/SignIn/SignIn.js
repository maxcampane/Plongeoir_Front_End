import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const signin = (props) => {
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
                        Se connecter
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField variant="outlined"
                                   margin="normal"
                                   required
                                   fullWidth
                                   type="email"
                                   id="email"
                                   label="Adresse email"
                                   name="email"
                                   autoComplete="email"
                                   autoFocus/>
                        <TextField variant="outlined"
                                   margin="normal"
                                   required
                                   fullWidth
                                   name="password"
                                   label="Mot de passe"
                                   type="password"
                                   id="password"
                                   autoComplete="current-password"/>
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />}
                                          label="Enregistrer mes identifiants"/>
                        <Button type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    {"Mot de passe oublié"}
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Je n'ai pas de compte"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
};

export default signin;