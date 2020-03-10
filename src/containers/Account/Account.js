import React from "react";
import * as actions_account from "../../store/actions/actions_account";
import * as routes_names from "../../config/routes_names";
import AccountComponent from "../../components/Account/Account";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Typography, TextField, withStyles } from "@material-ui/core";
import axios from "../../config/axios-orders";
import BookOverview from "../BookOverview/BookOverview";

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
        marginLeft: "10px",
    }
});

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            rentedBooks: [],
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

    updateObject = (oldObject, newObject) => {
        return {
            ...oldObject,
            ...newObject,
        }
    };

    checkInputValidity = (value) => {
        return value && value.length > 2;
    };

    inputChangedHandler = (event) => {
        const inputName = event.target.id;
        const value = event.target.value;

        this.setState({
            fields: this.updateObject(this.state.fields, {
                [inputName]: {
                    value: value,
                    type: this.state.fields[inputName].type,
                    editable: true,
                    displayValue: this.state.fields[inputName].displayValue,
                    placeholder: this.state.fields[inputName].placeholder,
                    isValid: this.checkInputValidity(value, this.state.fields[inputName]),
                    isTouched: true,
                }
            })
        });
    };

    submitUpdateUserInfo = () => {
        const updateForm = {
            firstName: this.state.fields.firstName.value,
            lastName: this.state.fields.lastName.value,
        };

        if(this.checkInputValidity(updateForm.firstName) && this.checkInputValidity(updateForm.lastName)){
            this.props.updateUserInfo(this.props.token, updateForm);
            this.setState(prevState => {
                return {
                    editMode: !prevState.editMode,
                }
            })
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    };

    componentDidMount() {
        this.props.getUserInfo(this.props.token);
        axios.get("/api/users/rentedBooks", { headers: { "X-AUTH-TOKEN": this.props.token }})
            .then(response => {
                this.setState({
                    rentedBooks: response.data,
                });
            })
            .catch(error => {
                console.log(error);
            })
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
                        <label>{field.config.displayValue + " :"}</label>
                        <TextField key={field.id}
                                   id={field.id}
                                   name={field.id}
                                   style={{marginLeft: "10px"}}
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
                        <label>{field.config.displayValue + " : "}</label>
                        <Typography className={this.props.classes.label}>
                            {this.props[field.id]}
                        </Typography>
                    </div>
                );
            }

            return returnValue;
        });

        let buttonConfirmUpdate = (
            <Button size="small" color="primary" onClick={this.switchMode}>
                Éditer le profil
            </Button>
        );

        if(this.state.editMode){
            buttonConfirmUpdate = (
                    <Button size="small" color="primary"
                            onClick={this.submitUpdateUserInfo}>
                        Valider</Button>
                )
        }

        let rentedBooksOverview = null;
        if(this.state.rentedBooks && this.state.rentedBooks.length > 0){
            rentedBooksOverview = this.state.rentedBooks.map((book, index) => (
                <BookOverview key={index} classes={this.props.classes} getBooks={this.getBooks} bookDetails={book}/>
            ));
        }

        return (
            <>
                {redirect}
                <AccountComponent classes={this.props.classes}
                                  switchMode={this.switchMode}
                                  actionButtons={buttonConfirmUpdate}
                                  rentedBooksOverview={rentedBooksOverview}
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
        getUserInfo: (token) => dispatch(actions_account.fetchUserData(token)),
        updateUserInfo: (token, updateForm) => dispatch(actions_account.updateUserData(token, updateForm)),
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Account));