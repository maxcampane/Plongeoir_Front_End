import React from "react";
import * as actions_categories from "../../store/actions/actions_categories";

import SideMenuButton from "../../components/SideMenuButton/SideMenuButton";

import { withStyles, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const styles = theme => ({
    sideMenu: {
        display: 'flex',
        backgroundColor: '#7986cb',
        // maxHeight: '100%',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
        },
    },
    sideBarMenuButton: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#7986cb',

        fontSize: '20px',
        // color: theme.palette.text.secondary,
        textAlign: 'center',

        borderSizing: 'border-box',
        borderTop: '2px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid black',

        transition: '0.3s',
        '&:hover': {
            paddingLeft: theme.spacing(6),
            color: theme.palette.warning.light,
        },
        [theme.breakpoints.down('xs')]: {
            width: '25%',
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
            height: '25%',
            maxHeight: "100px",
        },
    },
});

class SideMenu extends React.Component {
    componentDidMount() {
        this.props.fetchCategories(this.props.token);
    }

    render(){
        const { classes, sm, xs } = this.props;

        let sideMenuButtons = null;
        if(this.props.categories){
            sideMenuButtons = this.props.categories.map((category, index) => (
                <SideMenuButton key={index} url={"/categorie/" + category.id}
                                sideMenuButton={classes.sideBarMenuButton}>
                    {category.name}
                </SideMenuButton>
            ));
        }

        return (
            <Grid item sm={sm} xs={xs} className={classes.sideMenu}>
                {sideMenuButtons}
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        loading: state.categories.loading,
        error: state.categories.error,
        categories: state.categories.categories
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: (token) => dispatch(actions_categories.fetchCategories(token)),
    }
};

SideMenu.propTypes = {
    sm: PropTypes.number,
    xs: PropTypes.number,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SideMenu));