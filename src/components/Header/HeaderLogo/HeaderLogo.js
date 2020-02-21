import React from "react";
import "./HeaderLogo.css";
import PropTypes from "prop-types";

const headerLogo = (props) => {
    const { header_logo, header_logo_alt, logo } = props;

    return (
        <img src={header_logo}
             alt={header_logo_alt}
             className={logo}/>
    )
};

headerLogo.propTypes = {
    header_logo: PropTypes.string,
    header_logo_alt: PropTypes.string,
    logo: PropTypes.string
};

export default headerLogo;