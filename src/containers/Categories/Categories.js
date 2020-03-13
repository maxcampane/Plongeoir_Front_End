import React from "react";
import * as routes_names from "../../config/routes_names";
import * as actions_categories from "../../store/actions/actions_categories";
import { Grid, Paper, Typography, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {Link} from "react-router-dom";

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(6),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
        height: "95%",
        backgroundColor: theme.palette.warning.light,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
    },
    grid: {
        height: "30vh",
        [theme.breakpoints.down("md")]: {
            height: "10vh",
        },
    }
});

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchCategories(this.props.token);
    }

    render(){
        if(!this.props.token)
            return <Redirect to={routes_names.HOME}/>;

        const { classes } = this.props;

        let categories = null;
        if(this.props.categories){
            categories = this.props.categories.map((category, index) => (
                <Grid key={index} item xs={12} lg={6} className={classes.grid}>
                    <Paper className={classes.paper}
                           component={Link} to={"/categorie/" + category.name}>
                        <Typography>{category.name}</Typography>
                    </Paper>
                </Grid>
            ));
        }

        return (
            <>
                <div className={classes.root}>
                    <Grid container spacing={6}>
                        {categories}
                    </Grid>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories.categories,
        token: state.auth.token,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: (token) => dispatch(actions_categories.fetchCategories(token)),
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Home));