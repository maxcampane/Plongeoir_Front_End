import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

const styles = theme => ({
    root: {
        minHeight: "100%",
        flexGrow: 1,
        backgroundColor: "red",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: "100%"
    },
});

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check: true,
        }
    }

    hideCard = () => {
        this.setState({
            check: !this.state.check
        });
    };

    render(){
        const { classes } = this.props;
        console.log("check : " + this.state.check);
        const displayMode = this.state.check ? "" : "hidden";
        const backgroundColor = this.state.check ? "red" : "blue";

        return (
            <>
                <div style={{backgroundColor: backgroundColor}}>
                    Hello World
                </div>
                <Grid container spacing={3}>
                    <div style={{display: displayMode, backgroundColor: backgroundColor}}>
                        <Grid item sm={3} xs={12}>
                            <Paper className={classes.paper}>xs=12 sm=6</Paper>
                        </Grid>
                    </div>
                    <button onClick={this.hideCard}>click</button>
                    <Grid item sm={4} xs={12}>
                        <Paper className={classes.paper}>xs=12 sm=4</Paper>
                    </Grid>
                    <Grid item sm={5} xs={12}>
                        <Paper className={classes.paper}>xs=12 sm=4</Paper>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default withStyles(styles)(Home);