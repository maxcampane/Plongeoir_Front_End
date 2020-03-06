import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import * as routes_names from "../../config/routes_names";
import Home from "../Home/Home";
import Library from "../Library/Library";
import CategoryPage from "../CategoryPage/CategoryPage";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import BookPage from "../BookPage/BookPage";

class PageRouting extends React.Component {
    render(){
        return (
            <Switch>
                <Route path={routes_names.HOME} exact component={Home}/>
                <Route path={routes_names.LIBRARY} exact component={Library}/>
                <Route path={routes_names.LIBRARY} exact component={Library}/>
                <Route path={routes_names.CATEGORIE + "/:id"} exact component={CategoryPage}/>
                <Route path={routes_names.SIGNIN} exact component={SignIn}/>
                <Route path={routes_names.SIGNUP} exact component={SignUp}/>
                <Route path={routes_names.BOOKPAGE + "/:id"} exact component={BookPage}/>
                <Redirect to={routes_names.HOME}/>
            </Switch>
        );
    }
}

export default PageRouting;