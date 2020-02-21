import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const navBarGroup = (props) => {
    const { buttons, buttonClass } = props;

    let panelButtons = null;
    if(buttons){
        panelButtons = buttons.map((button, index) => {
            return (
                <Button key={index}
                        className={buttonClass}>
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