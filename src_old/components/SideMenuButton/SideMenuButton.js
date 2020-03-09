import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";

const sideMenuButton = (props) => (
    <MenuItem className={props.sideMenuButton}
              component={Link} to={props.url}>
        <p>{props.children}</p>
    </MenuItem>
);

sideMenuButton.propTypes = {
    url: PropTypes.string,
    sideMenuButton: PropTypes.string,
    children: PropTypes.string,
};

export default sideMenuButton;