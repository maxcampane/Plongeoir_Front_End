import React from "react";
import "./FooterGroup.css";
import {Toolbar, Typography} from "@material-ui/core";

const footerGroup = (props) =>  (
    <div className={"footerGroup"}>
        {props.children}
    </div>
);

export default footerGroup;