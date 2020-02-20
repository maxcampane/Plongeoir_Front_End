import React from "react";
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from "@material-ui/core";
import NavBarPanel from "../NavBarPanel/NavBarPanel";

const navbar = (props) => {
    const { classes, leftPanelButtons, rightPanelButtons } = props;

    return (
        <AppBar position="relative">
            <Toolbar className={classes.toolbar}>
                <NavBarPanel buttonClass={classes.buttons}
                             buttons={leftPanelButtons}/>
                <NavBarPanel buttonClass={classes.buttons}
                             buttons={rightPanelButtons}/>
            </Toolbar>
        </AppBar>
    );
};

navbar.propTypes = {
    classes: PropTypes.object
};


export default navbar;