import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const navbarPanel = (props) => {
    const { buttons, buttonClass } = props;

    let panelButtons = null;
    if(buttons){
        panelButtons = buttons.map((button, index) => <Button key={index} className={buttonClass}>{button.name}</Button>);
    }

    return (
        <div>
            {panelButtons}
        </div>
    )
};

navbarPanel.propTypes = {
    buttons: PropTypes.array,
    buttonClass: PropTypes.string,
};

export default navbarPanel;