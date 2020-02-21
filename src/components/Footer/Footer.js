import React from "react";
import FooterGroup from "./FooterGroup/FooterGroup";
import FooterGroupAddress from "./FooterGroup/FooterGroupContent/FooterGroupAddress";
import { BottomNavigation, Button } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const footer = (props) => {
    const footerAddress = <FooterGroupAddress generatedAddress={props.generatedAddress}
                                              generatedHours={props.generatedHours}/>;

    return (
        <BottomNavigation className={props.classes.footer}>
            <FooterGroup>
                <p>Trou-perdu-en-Isère</p>
                <p>38350 Isère</p>
                <p>01.23.45.67.89</p>
            </FooterGroup>
            <FooterGroup>
                <Button onClick={() => alert("CGU")}>CGU</Button>
            </FooterGroup>
            <FooterGroup>
                Contact us !
                <div>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                </div>
            </FooterGroup>
        </BottomNavigation>
    )
};

footer.propTypes = {
    classes: PropTypes.object,
    generatedAddress: PropTypes.element,
    generatedHours: PropTypes.element,
};

export default footer;