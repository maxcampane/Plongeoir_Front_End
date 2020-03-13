import React from "react";
import CategoryPage from "./CategoryPage";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as routes_names from "../../../config/routes_names";

const categoryController = (props) => {
    if(!props.token) return <Redirect to={routes_names.SIGNIN}/>;

    return (
        <CategoryPage key={props.match.params.id}
                      {...props}/>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
    };
};

export default connect(mapStateToProps)(categoryController);