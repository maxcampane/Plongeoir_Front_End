import React from "react";
import {Card, Container, Grid} from "@material-ui/core";
import SideMenu from "../../../containers/SideMenu/SideMenu";

const pageLayout = (props) => (
    <Grid container>
        <SideMenu sm={2} xs={12}/>
        <Grid item sm={10} xs={12}>
            <Container maxWidth="md" style={{height: "100%"}}>
                <Card style={{height: "100%", padding: "30px"}}>
                    {props.children}
                </Card>
            </Container>
        </Grid>
    </Grid>
);

export default pageLayout;