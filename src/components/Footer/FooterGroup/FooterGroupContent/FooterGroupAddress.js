import React from "react";
import { content_config } from "../../../../config/webapp_config";
import { Typography } from "@material-ui/core";

const footerGroupAddress = (props) => (
    <>
        {props.generatedAddress}
        {props.generatedHours}
    </>
);

export default footerGroupAddress;