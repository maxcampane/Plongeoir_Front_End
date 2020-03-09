import React from "react";
import * as routes_names from "../../config/routes_names";
import * as actions_auth from "../../store/actions/actions_authentication";

import Home from "../Home/Home";
import Categories from "../Categories/Categories";
import CategoryController from "../Categories/CategoryPage/CategoryController";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import BookPage from "../BookPage/BookPage";
import Account from "../Account/Account";

import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

class PageRouting extends React.Component {
    componentDidMount() {
        this.props.checkTokenValidity();
    }

    render(){
        if(!this.props.isAppInitialized){
            return null;
        }

        let routes = (
            <Switch>
                <Route path={routes_names.HOME} exact component={Home}/>

                <Route path={routes_names.SIGNIN} exact component={SignIn}/>
                <Route path={routes_names.SIGNUP} exact component={SignUp}/>

                <Redirect to={routes_names.HOME}/>
            </Switch>
        );

        if(this.props.isAuthenticated){
            routes = (
                <Switch>
                    <Route path={routes_names.HOME} exact component={Home}/>
                    <Route path={routes_names.CATEGORIES} exact component={Categories}/>
                    <Route path={routes_names.CATEGORIE + "/:id"} exact component={CategoryController}/>

                    <Route path={routes_names.ACCOUNT} exact component={Account}/>;
                    <Route path={routes_names.BOOKPAGE + "/:id"} exact component={BookPage}/>

                    <Redirect to={routes_names.HOME}/>
                </Switch>
            )
        }

        return routes;
    }
}

const mapStateToProps = state => {
    return {
        isAppInitialized: state.auth.isAppInitialized,
        isAuthenticated: state.auth.token !== null,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        checkTokenValidity: () => dispatch(actions_auth.authCheckTokenValidity())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageRouting);