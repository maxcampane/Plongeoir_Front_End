import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import * as routes_names from "../../config/routes_names";
import Home from "../Home/Home";
import Library from "../Library/Library";
import CategoryPage from "../CategoryPage/CategoryPage";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

class PageRouting extends React.Component {
    render(){
        const routes = (
            <Switch>
                <Route path={routes_names.HOME} exact component={Home}/>
                <Route path={routes_names.LIBRARY} exact component={Library}/>
                <Route path={routes_names.LIBRARY} exact component={Library}/>
                <Route path={routes_names.CATEGORIE + "/:id"} exact component={CategoryPage}/>
                <Route path={routes_names.SIGNIN} exact component={SignIn}/>
                <Route path={routes_names.SIGNUP} exact component={SignUp}/>
                <Redirect to={routes_names.HOME}/>
            </Switch>
        );

        return routes;
    }
}

export default PageRouting;