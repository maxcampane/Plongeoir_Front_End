import React from "react";
import SideMenuButton from "../../components/SideMenuButton/SideMenuButton";
import PropTypes from "prop-types";
import { withStyles, Grid } from "@material-ui/core";

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
    render(){
        const { classes, sm, xs } = this.props;

        return (
            <Grid item sm={sm} xs={xs} className={classes.sideMenu}>
                <SideMenuButton url={"/categorie/1"} sideMenuButton={classes.sideBarMenuButton}>Catégorie 1</SideMenuButton>
                <SideMenuButton url={"/categorie/2"} sideMenuButton={classes.sideBarMenuButton}>Catégorie 2</SideMenuButton>
                <SideMenuButton url={"/categorie/3"} sideMenuButton={classes.sideBarMenuButton}>Catégorie 3</SideMenuButton>
                <SideMenuButton url={"/categorie/4"} sideMenuButton={classes.sideBarMenuButton}>Catégorie 4</SideMenuButton>
            </Grid>
        )
    }
}

SideMenu.propTypes = {
    sm: PropTypes.number,
    xs: PropTypes.number,
};

export default withStyles(styles)(SideMenu);