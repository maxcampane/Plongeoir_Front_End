import React from "react";
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import NavBarGroup from "./NavBarGroup/NavBarGroup";
import HeaderLogo from "../Header/HeaderLogo/HeaderLogo";

const navbar = (props) => {
    const { classes, burgerIcon, name, header_logo, rightPanelButtons } = props;

    return (
        <AppBar position="relative">
            <Toolbar className={classes.toolbar}>
                <HeaderLogo header_logo={header_logo}
                            header_logo_alt={name}
                            logo={classes.logo}/>
                <Typography component="h2"
                            variant="h6"
                            color="inherit"
                            align="center"
                            noWrap
                            className={classes.toolbarTitle}>
                    { name }
                </Typography>
                <button onClick={() => console.log(props.isAuthenticated)}>auth</button>
                <NavBarGroup buttonClass={classes.buttons}
                             buttons={rightPanelButtons}/>
                {burgerIcon}
            </Toolbar>
        </AppBar>
    );
};

navbar.propTypes = {
    classes: PropTypes.object
};


export default navbar;