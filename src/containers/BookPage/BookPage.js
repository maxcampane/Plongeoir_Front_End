import React from "react";
import * as routes_names from "../../config/routes_names";
import * as actions_books from "../../store/actions/actions_books";

import BookPageComponent from "../../components/BookPage/BookPage";

import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";

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
});

class BookPage extends React.Component {
    componentDidMount() {
        if(this.props.token){
            this.props.fetchBook(this.props.match.params.id, this.props.token);
        }
    }

    render(){
        let book = this.props.book,
            bookPageContent = null;

        if(!this.props.token){
            return <Redirect to={routes_names.HOME}/>
        }

        if(this.props.book){
            bookPageContent = <BookPageComponent classes={this.props.classes}
                                                 book={book}/>;
        }


        return bookPageContent;
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        book: state.books.book
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBook: (bookId, token) => dispatch(actions_books.fetchBook(bookId, token))
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(BookPage));