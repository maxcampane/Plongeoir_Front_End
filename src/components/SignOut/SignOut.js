import React from "react";
import * as routes_names from "../../config/routes_names";
import { Redirect } from "react-router-dom";

const signOut = () => {
    return <Redirect to={routes_names.HOME}/>;
};

export default signOut;