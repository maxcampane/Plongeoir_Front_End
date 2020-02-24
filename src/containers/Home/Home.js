import React from 'react';
import bgImage from "../../ressources/home_bg_image.png";
import homeMap from "../../ressources/homeMap2.png";
import SideMenu from "../SideMenu/SideMenu";

import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = theme => ({
    mapContainer: {
        overflow: 'hidden',
    },
    homeImageLayout: {
        overflow: 'hidden',
        height: '100%',
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        [theme.breakpoints.down('xs')]: {
            height: "75%",
        }
    },
    img: {
        height: '100%',
        opacity: 0.3,
        transition: '0.2s',
        '&:hover': {
            opacity: 0.1,
        },
    },
    homeMapClass: {
        marginLeft: '-550px',
        zIndex: -3,
    }
});

class Home extends React.Component {
    render(){
        const { classes } = this.props;

        return (
            <Grid container>
                <SideMenu sm={2} xs={12}/>
                <Grid item sm={5} xs={12}>
                    <div className={classes.mapContainer}>
                        <img src={homeMap} alt={'homeMapImage'}
                             className={classes.homeMapClass}/>
                    </div>
                </Grid>
                <Grid item sm={5} xs={12}>
                    <div className={classes.homeImageLayout}>
                        <img className={classes.img}
                             src={bgImage}
                             alt={'home_background_image'}/>
                         <p>Hello World !</p>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Home);