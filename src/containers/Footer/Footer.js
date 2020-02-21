import React from "react";
import FooterComponent from "../../components/Footer/Footer";
import { withStyles } from "@material-ui/core";
import { content_config } from "../../config/webapp_config";

const styles = theme => ({
    footer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "lightblue",
        paddingBottom: theme.spacing(2),
        paddingTop: theme.spacing(2),
    }
});

class Footer extends React.Component {
    render(){
        const { classes } = this.props;
        const { name, address, number, hours} = content_config;
        let generatedAddress = null,
            generatedHours = null;

        if(content_config.address && content_config.name){
            generatedAddress = (
                <>
                    <p>
                        {name}
                    </p>
                    <p>
                        {number}
                    </p>
                    <p>
                        {address}
                    </p>
                </>
            )
        }

        if(content_config.hours){
            generatedHours = (
                <>
                    { hours.map((hour, index) => (
                        <p key={index}>
                            {hour.day + " : " + hour.time}
                        </p>
                    )) }
                </>
            )
        }

        return (
            <FooterComponent classes={classes}
                             generatedAddress={generatedAddress}
                             generatedHours={generatedHours}/>
        )
    }
}

export default withStyles(styles)(Footer);