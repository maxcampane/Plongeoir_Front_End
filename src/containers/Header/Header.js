import React from "react";
import HeaderComponent from "../../components/Header/Header";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
});

class Header extends React.Component {
    render(){
        const { classes, header_logo, header_logo_alt, title } = this.props;

        return (
            <HeaderComponent classes={classes}
                            header_logo={header_logo}
                            header_logo_alt={header_logo_alt}
                            title={title}/>
        );
    }
}

Header.propTypes = {
    header_logo: PropTypes.string,
    header_logo_alt: PropTypes.string,
    title: PropTypes.string,
};

export default withStyles(styles)(Header);