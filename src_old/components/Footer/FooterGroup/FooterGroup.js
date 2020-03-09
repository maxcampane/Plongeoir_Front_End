import React from "react";
import "./FooterGroup.css";

const footerGroup = (props) =>  (
    <div className={"footerGroup"}>
        {props.children}
    </div>
);

export default footerGroup;