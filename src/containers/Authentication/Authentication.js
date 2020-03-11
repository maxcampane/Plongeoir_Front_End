import React from 'react';
import * as routes_names from "../../config/routes_names";
import * as actions_authentication from "../../store/actions/actions_authentication";
import AuthenticationComponent from "../../components/Authentication/Authentication";

import {Button, Grid, Link as MUILink, TextField} from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: {
                    value: "",
                    type: "email",
                    placeholder: "E-mail",
                    usedForLogin: true,
                    isValid: true,
                    isTouched: false,
                },
                password: {
                    value: "",
                    type: "password",
                    placeholder: "Mot de passe",
                    usedForLogin: true,
                    isValid: true,
                    isTouched: false,
                },
                firstName: {
                    value: "",
                    type: "text",
                    placeholder: "Prénom",
                    usedForLogin: false,
                    isValid: true,
                    isTouched: false,
                },
                lastName: {
                    value: "",
                    type: "text",
                    placeholder: "Nom",
                    usedForLogin: false,
                    isValid: true,
                    isTouched: false,
                }
            }
        }
    }

    updateObject = (oldObject, newObject) => {
        return {
            ...oldObject,
            ...newObject,
        }
    };

    validateEmail = (email) => {
        const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return regex.test(email);
    };

    validatePassword = (password) => {
        return password && password.length > 4;
    };

    validateName = (name) => {
        return name && name.length > 2;
    };

    checkInputValidity = (value, inputName) => {
        let check = false;
        switch (inputName) {
            case "email":
                check = this.validateEmail(value);
                break;
            case "password":
                check = this.validatePassword(value);
                break;
            case "text":
                check = this.validateName(value);
                break;
            default:
                break;
        }

        return check;
    };

    inputChangedHandler = (event) => {
        const inputName = event.target.id;
        const value = event.target.value;

        this.setState({
            form: this.updateObject(this.state.form, {
                [inputName]: {
                    value: value,
                    type: this.state.form[inputName].type,
                    usedForLogin: this.state.form[inputName].usedForLogin,
                    placeholder: this.state.form[inputName].placeholder,
                    isValid: this.checkInputValidity(value, this.state.form[inputName].type),
                    touched: true,
                }
            })
        });
    };

    isFormValid = (authData) => {
        let check = true;

        if(!this.checkInputValidity(authData.email, "email")){
            check = false;
        } else if (!this.checkInputValidity(authData.password, "password")) {
            check = false;
        } else if (authData.firstName && !this.checkInputValidity(authData.firstName, "text")) {
            check = false;
        } else if (authData.lastName && !this.checkInputValidity(authData.lastName, "text")) {
            check = false;
        }

        return check;
        // return true;
    };

    submitForm = (event) => {
        if(event.key === "Enter")
            this.submitAuthentication();
    };

    submitAuthentication = () => {
        let authData = {
            email: this.state.form.email.value,
            password: this.state.form.password.value,
        };

        let authFunction = this.props.logIn;

        if(this.props.isSignUp){
            authData = {
                ...authData,
                firstName: this.state.form.firstName.value,
                lastName: this.state.form.lastName.value,
            };

            authFunction = this.props.signUp;
        }

        if(this.isFormValid(authData)){
            authFunction(authData);
        } else {
            alert("Veuillez compléter tous les champs.");
        }
    };

    render(){
        const { classes } = this.props;

        let formData = [];
        let inputData = null;
        for(let key in this.state.form){
            inputData = this.state.form[key];
            if(this.props.isSignUp || inputData.usedForLogin){
                formData.push({
                    id: key,
                    config: inputData
                });
            }
        }

        let form = formData.map(data => (
            <TextField key={data.id}
                       id={data.id}
                       name={data.id}
                       type={data.config.type}
                       label={data.config.placeholder}
                       error={!data.config.isValid}
                       onChange={this.inputChangedHandler}
                       onKeyPress={this.submitForm}
                       variant="outlined"
                       margin="normal"
                       required fullWidth/>
        ));

        let authTitle = "Se connecter",
            justify = null,
            bottomLinks = (
                <>
                    <Grid item xs>

                    </Grid>
                    <Grid item>
                        <MUILink component={Link} to={routes_names.SIGNUP} variant="body2">
                            {"Je n'ai pas de compte"}
                        </MUILink>
                    </Grid>
                </>
            );

        if(this.props.isSignUp){
            authTitle = "S'inscrire";
            justify = "flex-end";

            bottomLinks = (
                <>
                    <Grid item>
                        <MUILink component={Link} to={routes_names.SIGNIN} variant="body2">
                            {"J'ai déjà un compte"}
                        </MUILink>
                    </Grid>
                </>
            );
        }

        return (
            <AuthenticationComponent classes={classes}
                                     authTitle={authTitle}
                                     bottomLinks={bottomLinks}
                                     justify={justify}
                                     inputChangedHandler={this.inputChangedHandler}
                                     submit={this.submitAuthentication}>
                {form}
            </AuthenticationComponent>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logIn: (data) => dispatch(actions_authentication.authLogin(data)),
        signUp: (data) => dispatch(actions_authentication.authSignUp(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);