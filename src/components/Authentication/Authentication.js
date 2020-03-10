import React from "react";
import {Avatar, Button, CardActions, CssBaseline, Grid, Paper, Typography} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const authentication = (props) => {
    const { classes } = props;

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} className={classes.image}/>
            <Grid item xs={12} elevation={6} square
                  component={Paper} className={classes.absolute}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {props.authTitle}
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            {props.children}

                            <CardActions style={{width: "100%"}}>
                                <Button fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                        onClick={props.submit}>
                                    {props.authTitle}
                                </Button>
                                {props.buttonSupp}
                            </CardActions>

                            <Grid container justify={props.justify}>
                                {props.bottomLinks}
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
};

export default authentication;