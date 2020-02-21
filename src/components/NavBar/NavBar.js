import React from "react";
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from "@material-ui/core";
import NavBarGroup from "./NavBarGroup/NavBarGroup";

const navbar = (props) => {
    const { classes, leftPanelButtons, rightPanelButtons } = props;

    return (
        <AppBar position="relative">
            <Toolbar className={classes.toolbar}>
                <NavBarGroup buttonClass={classes.buttons}
                             buttons={leftPanelButtons}/>
                <NavBarGroup buttonClass={classes.buttons}
                             buttons={rightPanelButtons}/>
            </Toolbar>
        </AppBar>
    );
};

navbar.propTypes = {
    classes: PropTypes.object
};


export default navbar;