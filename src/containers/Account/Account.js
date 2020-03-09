import React from "react";
import * as routes_names from "../../config/routes_names";
import AccountComponent from "../../components/Account/Account";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Account extends React.Component {
    render(){
        let redirect = null;
        if(!this.props.isAuthenticated){
            return <Redirect to={routes_names.HOME}/>
        }

        return (
            <>
                {redirect}
                <AccountComponent/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};

export default connect(mapStateToProps)(Account);