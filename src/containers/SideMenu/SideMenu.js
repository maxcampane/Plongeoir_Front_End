import React from "react";
import SideMenuButton from "../../components/SideMenuButton/SideMenuButton";
import PropTypes from "prop-types";
import { withStyles, Grid } from "@material-ui/core";
import axios from "../../config/axios-orders";

const styles = theme => ({
    sideMenu: {
        display: 'flex',
        backgroundColor: '#7986cb',
        // maxHeight: '100%',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
        },
    },
    sideBarMenuButton: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#7986cb',

        fontSize: '20px',
        // color: theme.palette.text.secondary,
        textAlign: 'center',

        borderSizing: 'border-box',
        borderTop: '2px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid black',

        transition: '0.3s',
        '&:hover': {
            paddingLeft: theme.spacing(6),
            color: theme.palette.warning.light,
        },
        [theme.breakpoints.down('xs')]: {
            width: '25%',
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
            height: '25%',
            maxHeight: "100px",
        },
    },
});

class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: null,
        }
    }
    fetchData = () => {
        axios.get("/books/categories")
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    componentDidMount() {
        axios.get("/books/categories")
            .then(response => {
                this.setState({ categories: [...response.data] });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render(){
        const { classes, sm, xs } = this.props;

        let sideMenuButtons = null;
        if(this.state.categories){
            sideMenuButtons = this.state.categories.map((category, index) => (
                <SideMenuButton key={index} url={"/categorie/" + category}
                                sideMenuButton={classes.sideBarMenuButton}>
                    {category}
                </SideMenuButton>
            ));
        }

        return (
            <Grid item sm={sm} xs={xs} className={classes.sideMenu}>
                {sideMenuButtons}
            </Grid>
        )
    }
}

SideMenu.propTypes = {
    sm: PropTypes.number,
    xs: PropTypes.number,
};

export default withStyles(styles)(SideMenu);