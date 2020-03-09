import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import NavBarComponent from "../../components/NavBar/NavBar";
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { connect } from "react-redux";
import * as routes_names from "../../config/routes_names";

const styles = theme => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    buttons: {
        color: theme.palette.warning.light,
        border: "1px solid",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },
    logo: {
        [theme.breakpoints.down('sm')]: {
            width: "75%",
        },
    },
    burgerMenu: {
        display: "none",
        [theme.breakpoints.down('sm')]: {
            display: "block",
        },
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

class NavbarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMenu: false,
        }
    }

    handleMobileMenuDisplay = () => {
        this.setState( prevState => {
            return {
                mobileMenu: !prevState.mobileMenu
            }
        });
    };

    render(){
        const { classes, header_logo, name, leftPanelButtons } = this.props;

        let burgerIcon = <MenuIcon className={classes.burgerMenu} onClick={this.handleMobileMenuDisplay}/>;
        if(this.state.mobileMenu){
            burgerIcon = <MenuOpenIcon className={classes.burgerMenu} onClick={this.handleMobileMenuDisplay}/>;
        }


        let rightPanelButtons = [{
            name: "Accueil",
            url: routes_names.HOME,
        }];

        let accountButtons = [
            {
                name: "Se connecter",
                url: routes_names.SIGNIN,
            },
            {
                name: "S'inscrire",
                url: routes_names.SIGNUP,
            }
        ];

        if(this.props.isAuthenticated){
            accountButtons = [
                {
                    name: "Mon compte",
                    url: routes_names.ACCOUNT
                },
                {
                    name: "Se déconnecter",
                    url: routes_names.SIGNOUT,
                }
            ]
        }

        rightPanelButtons.push(...accountButtons);

        return (
            <NavBarComponent header_logo={header_logo}
                             classes={classes}
                             name={name}
                             isAuthenticated={this.props.isAuthenticated}
                             leftPanelButtons={leftPanelButtons}
                             rightPanelButtons={rightPanelButtons}
                             burgerIcon={burgerIcon}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token,// !== null,
    };
};

NavbarContainer.propTypes = {
    leftPanelButtons: PropTypes.array,
    rightPanelButtons: PropTypes.array,
};

export default withStyles(styles)(connect(mapStateToProps)(NavbarContainer));