import React from "react";
import SideMenu from "../../containers/SideMenu/SideMenu";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Grid,
    Typography
} from "@material-ui/core";

const account = (props) => (
    <Grid container>
        <SideMenu sm={2} xs={12}/>
        <Grid item sm={10} xs={12}>
            <Container maxWidth="md" className={props.classes.container}>
                <Card classes={props.classes.paper}  style={{height: "100%"}}>
                    <CardContent style={{marginTop: "20px"}}>
                        <Typography className={props.classes.title}
                                    gutterBottom variant="h3" component="h1">
                            Votre profil
                        </Typography>
                        {props.fields}
                    </CardContent>
                    <CardActions style={{marginTop: "50px"}}>
                        <Button size="small" color="primary" onClick={props.switchMode}>
                            Éditer le profil
                        </Button>
                    </CardActions>
                </Card>
            </Container>
        </Grid>
    </Grid>
);

export default account;