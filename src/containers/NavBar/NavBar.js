import React from "react";
import PropTypes from "prop-types";
import { withStyles} from "@material-ui/core";
import NavBarComponent from "../../components/NavBar/NavBar";
import {css_config} from "../../config/webapp_config";

const styles = theme => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    buttons: {
        color: css_config.font_color,
        border: "1px solid",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
});

class NavbarContainer extends React.Component {
    render(){
        const { classes, leftPanelButtons, rightPanelButtons } = this.props;

        return (
            <NavBarComponent classes={classes}
                             leftPanelButtons={leftPanelButtons}
                             rightPanelButtons={rightPanelButtons}/>
        );
    }
}

NavbarContainer.propTypes = {
    leftPanelButtons: PropTypes.array,
    rightPanelButtons: PropTypes.array,
};

export default withStyles(styles)(NavbarContainer);