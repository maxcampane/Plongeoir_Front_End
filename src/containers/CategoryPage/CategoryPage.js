import React from "react";
import CategoryPageComponent from "../../components/CategoryPage/CategoryPage";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        // [theme.breakpoints.down('xs')]:{
        //     // color: 'red',
        //     flexDirection: 'row',
        // }
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
});

class CategoryPage extends React.Component {
    render() {
        const {classes, match: {params}} = this.props;

        return <CategoryPageComponent classes={classes}
                                      categoryId={params.id}/>;
    }
}

export default withStyles(styles)(CategoryPage);