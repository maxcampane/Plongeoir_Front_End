import React from "react";
import * as actions_categories from "../../store/actions/actions_categories";
import { Grid, Paper, withStyles } from "@material-ui/core";
import { connect } from "react-redux";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: "95%",
    },
    grid: {
        height: "50vh"
    }
});

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchCategories(this.props.token);
    }

    render(){
        const { classes } = this.props;

        let categories = null;
        if(this.props.categories){
            categories = this.props.categories.map((category, index) => (
                <Grid key={index} item sm={12} md={6} className={classes.grid}>
                    <a href={"/categorie/" + category.id}>
                        <Paper className={classes.paper}>{category.name}</Paper>
                    </a>
                </Grid>
            ));
        }

        return (
            <>
                <div className={classes.root}>
                    <Grid container>
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