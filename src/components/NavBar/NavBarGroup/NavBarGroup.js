import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const navBarGroup = (props) => {
    const { buttons, buttonClass } = props;

    let panelButtons = null;
    if(buttons){
        panelButtons = buttons.map((button, index) => {
            // const navlink = {button.name}</NavLink>;
            return (
                <Button key={index}
                        className={buttonClass}
                        component={NavLink}
                        to={button.url}>
                    {button.name}
                </Button>
            )
        });
    }

    return (
        <div>
            {panelButtons}
        </div>
    )
};

navBarGroup.propTypes = {
    buttons: PropTypes.array,
    buttonClass: PropTypes.string,
};

export default navBarGroup;