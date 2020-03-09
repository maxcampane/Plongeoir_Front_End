import React from "react";
import * as actions_account from "../../store/actions/actions_account";
import * as routes_names from "../../config/routes_names";
import AccountComponent from "../../components/Account/Account";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Typography, TextField, withStyles } from "@material-ui/core";
import axios from "../../config/axios-orders";

const styles = theme => ({
    container: {
        height: "100%",
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    title: {
        textAlign: "center",
        marginTop: "50px",
        marginBottom: "70px",
    },
    label: {
        display: "inline",
    }
});

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            fields: {
                firstName: {
                    displayValue: "Prénom",
                    editable: true,
                    value: "",
                    placeholder: "Prénom",
                    isValid: true,
                    isTouched: false,
                },
                lastName: {
                    displayValue: "Nom",
                    editable: true,
                    value: "",
                    placeholder: "Nom",
                    isValid: true,
                    isTouched: false,
                },
                email: {
                    displayValue: "Email",
                    editable: false,
                    value: "",
                    placeholder: "Email",
                    isValid: true,
                    isTouched: false,
                }
            }
        }
    }

    switchMode = () => {
        this.setState(prevState => {
            return {
                editMode: !prevState.editMode,
            }
        });
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

    submitUpdateUserInfo = () => {
        const updateForm = {
            firstName: this.state.fields.firstName.value,
            lastName: this.state.fields.lastName.value,
            email: this.state.fields.email.value,
            inscriptionDate: this.state.fields.inscriptionDate.value,
        }


    };

    componentDidMount() {
        console.log("[Account] token : " + this.props.token);
        this.props.getUserInfo(this.props.token);
        // axios.get("/api/users")
        //     .then(response => console.log(response))
        //     .catch(error => console.log(error));
    }

    render(){
        let redirect = null;
        if(!this.props.isAuthenticated){
            return <Redirect to={routes_names.HOME}/>
        }

        let fieldsData = [],
            inputData = null,
            returnValue = null;
        for(let key in this.state.fields){
            inputData = this.state.fields[key];
            if(!this.state.editMode || inputData.editable ) {
                fieldsData.push({
                    id: key,
                    config: inputData,
                });
            }
        }

        const fields = fieldsData.map((field, index) => {
            if(this.state.editMode){
                returnValue = (
                    <div key={index}>
                        {field.config.displayValue + " :"}
                        <TextField key={field.id}
                                   id={field.id}
                                   name={field.id}
                                   label={field.config.placeholder}
                                   error={!field.config.isValid}
                                   onChange={this.inputChangedHandler}>
                            {this.props[field.id]}
                        </TextField>
                    </div>
                );
            } else {
                returnValue = (
                    <div key={index}>
                        {field.config.displayValue + " : "}
                        <Typography className={this.props.classes.label}>
                            {this.props[field.id]}
                        </Typography>
                    </div>
                );
            }

            return returnValue;
        });

        return (
            <>
                {redirect}
                <AccountComponent classes={this.props.classes}
                                  switchMode={this.switchMode}
                                  fields={fields}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        isAuthenticated: state.auth.token !== null,
        error: state.acc.error,
        firstName: state.acc.firstName,
        lastName: state.acc.lastName,
        email: state.acc.email,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateUserInfo: (updateForm) => dispatch(actions_account.updateUserData(updateForm)),
        getUserInfo: (token) => dispatch(actions_account.fetchUserData(token)),
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Account));