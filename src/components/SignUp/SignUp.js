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
                                <Link href="#" variant="body2">
                                    {"J'ai déjà un compte"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
};

export default signup;