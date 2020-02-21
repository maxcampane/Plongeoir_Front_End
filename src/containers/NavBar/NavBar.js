import React from "react";
import PropTypes from "prop-types";
import { withStyles} from "@material-ui/core";
import NavBarComponent from "../../components/NavBar/NavBar";

const styles = theme => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    buttons: {
        color: theme.palette.warning.light,
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