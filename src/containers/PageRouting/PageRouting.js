import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import * as routes_names from "../../config/routes_names";
import Home from "../../containers/Home/Home";
import Home2 from "../../containers/Home/Home2";

class PageRouting extends React.Component {
    render(){
        const routes = (
            <Switch>
                <Route path={routes_names.HOME} exact component={Home}/>
                <Route path={routes_names.LIBRARY} exact component={Home2}/>
                <Redirect to={routes_names.HOME}/>
            </Switch>
        );

        return routes;
    }
}

export default PageRouting;