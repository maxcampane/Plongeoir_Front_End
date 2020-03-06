import React from "react";
import Authentication from "../../containers/Authentication/Authentication";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        height: '100vh',
    },
    absolute: {
        marginTop: "50px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 2,
        padding: "20px",
    },
    image: {
        zIndex: -1,
        filter: "blur(6px)",
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.warning.light,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

const signIn = (props) => <Authentication classes={props.classes}
                                          isSignUp={true}/>;

export default withStyles(styles)(signIn);