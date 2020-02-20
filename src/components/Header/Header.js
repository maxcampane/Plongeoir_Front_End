import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, Typography } from '@material-ui/core';

const header = (props) => {
    const { header_logo, header_logo_alt, title, classes } = props;

    return (
        <>
            <Toolbar className={classes.toolbar}>
                <img src={header_logo}
                     alt={header_logo_alt}/>
                <Typography component="h2"
                            variant="h5"
                            color="inherit"
                            align="center"
                            noWrap
                            className={classes.toolbarTitle}>
                    {title}
                </Typography>
            </Toolbar>
        </>
    );
};

header.propTypes = {
    title: PropTypes.string,
    header_logo: PropTypes.string,
    header_logo_alt: PropTypes.string,
    classes: PropTypes.object
};

export default header;