import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class Home extends React.Component {
    render(){
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item sm={3} xs={12}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Paper className={classes.paper}>xs=12</Paper>
                    </Grid>
                    <Grid item sm={5} xs={12}>
                        <Paper className={classes.paper}>xs=12</Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Home);